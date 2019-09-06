import {MeasureDTO, PatientDTO} from '../dto';
import {MeasureRepository, PatientRepository} from '../repository';
import {deserialize, deserializeArray, serialize} from 'class-transformer';
import {Measure, Patient} from '../entity';
import {Injectable} from '@nestjs/common';

@Injectable()
export class PatientService {

  constructor(private readonly repository: PatientRepository,
              private readonly measureRepository: MeasureRepository) {
  }

  async getPatientList(): Promise<PatientDTO[]> {
    return deserializeArray<PatientDTO>(
      PatientDTO,
      serialize<Patient[]>(await this.repository.find()),
    );
  }

  async addPatient(patient: PatientDTO): Promise<PatientDTO> {
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<Patient>(await this.repository.create(patient)),
    );
  }

  async editPatient(id: string, patient: PatientDTO): Promise<PatientDTO> {
    const foundPatient: Patient = await this.repository.findOneOrFail(id);
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<Patient>(await this.repository.save<Patient>({...foundPatient, ...patient})),
    );
  }

  async deletePatient(id: string): Promise<void> {
    await this.repository.delete({id});
  }

  async addPatientMeasure(id: string, measure: MeasureDTO): Promise<PatientDTO> {
    const foundPatient: Patient = await this.repository.findOneOrFail({id});
    await this.measureRepository.save<Measure>({...measure, patient: foundPatient});
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<Patient>(await this.repository.findOne({id})),
    );
  }
}
