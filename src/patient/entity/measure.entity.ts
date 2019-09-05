import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Patient} from './patient.entity';

@Entity()
export class Measure {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'ds_hip', type: 'int64' })
  hip: number;

  @Column({ name: 'ds_waist', type: 'int64' })
  waist: number;

  @Column({ name: 'ds_weight', type: 'int64' })
  weight: number;

  @OneToOne<Measure>(_ => Patient, (measure: Measure) => measure.patient)
  patient: Patient;

  day: number;
  month: number;
  year: number;
}
