import {MeasureDTO} from './measure.dto';
import {deserialize, serialize} from 'class-transformer';
import {PatientVO} from '../vo';

export class PatientDTO {
  constructor(public id: string,
              public name: string,
              public sex: string,
              public birthdayDay: number,
              public birthdayMonth: number,
              public birthdayYear: number,
              public measures: MeasureDTO[]) {
  }

  transformToVO(): PatientVO {
    return deserialize<PatientVO>(
      PatientVO,
      serialize<PatientDTO>(this),
    );
  }
}
