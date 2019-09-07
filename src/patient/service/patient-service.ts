import {MeasureDTO, PatientDTO} from '../dto';
import {MeasureRepository, PatientRepository} from '../repository';
import {Measure, Patient} from '../entity';
import {Injectable} from '@nestjs/common';

@Injectable()
export class PatientService {

  constructor(private readonly repository: PatientRepository,
              private readonly measureRepository: MeasureRepository) {
  }

  async getPatientList(): Promise<Patient[]> {
    return this.repository.find();
  }

  async addPatient(patient: PatientDTO): Promise<Patient> {
    return this.repository.create(patient);
  }

  async editPatient(id: string, patient: PatientDTO): Promise<Patient> {
    const foundPatient: Patient = await this.repository.findOneOrFail(id);
    return this.repository.save<Patient>({...foundPatient, ...patient});
  }

  async deletePatient(id: string): Promise<void> {
    await this.repository.delete({id});
  }

  async addPatientMeasure(id: string, measure: MeasureDTO): Promise<Patient> {
    const foundPatient: Patient = await this.repository.findOneOrFail({id});
    await this.measureRepository.save<Measure>({...measure, patient: foundPatient});
    return await this.repository.findOne({id});
  }
}
