import {deserialize, serialize} from 'class-transformer';
import {PatientDTO} from '../dto';

export class PatientVO {
  constructor(
    public id: string,
    public name: string,
    public sex: string,
    public birthdayDay: number,
    public birthdayMonth: number,
    public birthdayYear: number,
  ) {
  }

  transformToDTO(): PatientDTO {
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<PatientVO>(this),
    );
  }
}
