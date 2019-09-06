import {PatientVO} from './patient-vo';
import {deserialize, serialize} from 'class-transformer';
import {MeasureDTO} from '../dto';

export class MeasureVO {
  constructor(public id: string,
              public hip: number,
              public waist: number,
              public weight: number,
              public patient: PatientVO,
              public day: number,
              public month: number,
              public year: number) {
  }

  transformToDTO() {
    return deserialize<MeasureDTO>(
      MeasureDTO,
      serialize<MeasureVO>(this));
  }
}
