import {PatientDTO} from './patient.dto';
import {ObservabilityDTO} from '../../commons/dto';

export class MeasureDTO extends ObservabilityDTO {
  constructor(public id: string,
              public hip: number,
              public waist: number,
              public weight: number,
              public patient: PatientDTO,
              public day: number,
              public month: number,
              public year: number,
              public inserted: Date,
              public updated: Date,
              public version: number) {
    super(inserted, updated, version);
  }
}
