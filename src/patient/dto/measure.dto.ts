import {PatientDTO} from './patient.dto';

export class MeasureDTO {
  constructor(public id: string,
              public hip: number,
              public waist: number,
              public weight: number,
              public patient: PatientDTO,
              public day: number,
              public month: number,
              public year: number) {
  }
}
