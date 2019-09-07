import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Constants} from '../../commons';
import {PatientService} from '../service';
import {deserialize, deserializeArray, serialize} from 'class-transformer';
import {PatientDTO} from '../dto';
import {MeasureVO, PatientVO} from '../vo';
import {Patient} from '../entity';

@Controller(`${Constants.API_PREFIX}/${Constants.API_VERSION_1}/pacient`)
export class PatientController {

  constructor(private readonly service: PatientService) {
  }

  @Get()
  async getPatientList(): Promise<PatientDTO[]> {
    const patientList: Patient[] = await this.service.getPatientList();
    return this.transformEntityArrayToDTOArray<Patient, PatientDTO>(patientList, PatientDTO);
  }

  @Post()
  async addPatient(@Body() patient: PatientVO): Promise<PatientDTO> {
    const addedPatient: Patient = await this.service.addPatient(
      patient.transformToDTO(),
    );
    return this.transformEntityToDTO<Patient, PatientDTO>(addedPatient, PatientDTO);
  }

  @Put(':id')
  async editPatient(@Body() patient: PatientVO, @Param('id') id: string): Promise<PatientDTO> {
    const changedPatient: Patient = await this.service.editPatient(
      id,
      patient.transformToDTO(),
    );
    return this.transformEntityToDTO<Patient, PatientDTO>(changedPatient, PatientDTO);
  }

  @Delete()
  async deletePatient(@Param('id') id: string): Promise<void> {
    await this.service.deletePatient(id);
  }

  @Post(':id/measure')
  async addPatientMeasure(@Body() measure: MeasureVO, @Param('id') id: string): Promise<PatientDTO> {
    const patientWithAddedMeasure: Patient = await this.service.addPatientMeasure(
      id,
      measure.transformToDTO(),
    );
    return this.transformEntityToDTO<Patient, PatientDTO>(patientWithAddedMeasure, PatientDTO);
  }

  private transformEntityToDTO<Entity, DTO>(entity: Entity, dtoClass: any) {
    return deserialize<DTO>(
      dtoClass,
      serialize<Entity>(entity),
    );
  }

  private transformEntityArrayToDTOArray<Entity, DTO>(entity: Entity[], dtoClass: any) {
    return deserializeArray<DTO>(
      dtoClass,
      serialize<Entity>(entity),
    );
  }
}
