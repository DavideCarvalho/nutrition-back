import {EntityRepository, Repository} from 'typeorm';
import {Patient} from '../entity';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
}
