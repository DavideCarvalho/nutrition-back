import {MeasureDTO} from './measure.dto';
import {deserialize, serialize} from 'class-transformer';
import {PatientVO} from '../vo';
import {ObservabilityDTO} from '../../commons/dto';

export class PatientDTO extends ObservabilityDTO {
  constructor(public id: string,
              public name: string,
              public sex: string,
              public birthdayDay: number,
              public birthdayMonth: number,
              public birthdayYear: number,
              public measures: MeasureDTO[],
              public inserted: Date,
              public updated: Date,
              public version: number) {
    super(inserted, updated, version);
  }

  transformToVO(): PatientVO {
    return deserialize<PatientVO>(
      PatientVO,
      serialize<PatientDTO>(this),
    );
  }
}
