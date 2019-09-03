import {PatientDTO} from '../dto';
import {PatientRepository} from '../repository';
import {deserialize, deserializeArray, serialize} from 'class-transformer';
import {Patient} from '../entity';
import {Injectable} from '@nestjs/common';

@Injectable()
export class PatientService {

  constructor(private readonly repository: PatientRepository) {
  }

  async getPatientList(): Promise<PatientDTO[]> {
    return deserializeArray<PatientDTO>(
      PatientDTO,
      serialize<Patient[]>(await this.repository.find()),
    );
  }

  async addPatient(pacient: PatientDTO): Promise<PatientDTO> {
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<Patient>(await this.repository.create(pacient)),
    );
  }

  async editPatient(id: number, pacient: PatientDTO): Promise<PatientDTO> {
    const foundPacient: Patient = await this.repository.findOneOrFail(id);
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<Patient>(await this.repository.save<Patient>({...foundPacient, ...pacient})),
    );
  }

  async deletePatient(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
}
