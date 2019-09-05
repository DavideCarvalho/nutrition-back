import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Constants} from '../../commons';
import {PatientService} from '../service';
import {deserialize, deserializeArray, serialize} from 'class-transformer';
import {PatientDTO} from '../dto';
import {PatientVO} from '../vo';

@Controller(`${Constants.API_PREFIX}/${Constants.API_VERSION_1}/pacient`)
export class PatientController {

  constructor(private readonly service: PatientService) {
  }

  @Get()
  async getPatientList(): Promise<PatientVO[]> {
    return deserializeArray<PatientVO>(
      PatientVO,
      serialize<PatientDTO[]>(await this.service.getPatientList()),
    );
  }

  @Post()
  async addPatient(@Body() patient: PatientVO): Promise<PatientVO> {
    const addedPatient: PatientDTO = await this.service.addPatient(
      deserialize<PatientDTO>(
        PatientDTO,
        serialize<PatientVO>(patient),
      ),
    );
    return deserialize<PatientVO>(PatientVO, serialize<PatientDTO>(addedPatient));
  }

  @Put(':id')
  async editPatient(@Body() patient: PatientVO, @Param('id') id: string): Promise<PatientVO> {
    const changedPatient: PatientDTO = await this.service.editPatient(
      id,
      patient,
    );
    return deserialize<PatientVO>(PatientVO, serialize<PatientDTO>(changedPatient));
  }

  @Delete()
  async deletePatient(@Param('id') id: string): Promise<void> {
    await this.service.deletePatient(id);
  }
}
