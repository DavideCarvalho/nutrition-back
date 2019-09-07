import {PatientVO} from './patient.vo';
import {deserialize, serialize} from 'class-transformer';
import {MeasureDTO} from '../dto';
import {ObservabilityVO} from '../../commons/vo';

export class MeasureVO extends ObservabilityVO {
  constructor(public hip: number,
              public waist: number,
              public weight: number,
              public patient: PatientVO,
              public day: number,
              public month: number,
              public year: number,
              public inserted: Date,
              public updated: Date,
              public version: number) {
    super(inserted, updated, version);
  }

  transformToDTO() {
    return deserialize<MeasureDTO>(
      MeasureDTO,
      serialize<MeasureVO>(this));
  }
}
