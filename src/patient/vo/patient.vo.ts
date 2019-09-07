import {deserialize, serialize} from 'class-transformer';
import {PatientDTO} from '../dto';
import {MeasureVO} from './measure.vo';
import {ObservabilityVO} from '../../commons/vo';

export class PatientVO extends ObservabilityVO {
  constructor(
    public name: string,
    public sex: string,
    public birthdayDay: number,
    public birthdayMonth: number,
    public birthdayYear: number,
    public measures: MeasureVO[],
    public inserted: Date,
    public updated: Date,
    public version: number) {
    super(inserted, updated, version);
  }

  transformToDTO(): PatientDTO {
    return deserialize<PatientDTO>(
      PatientDTO,
      serialize<PatientVO>(this),
    );
  }
}
