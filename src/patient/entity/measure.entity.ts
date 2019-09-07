import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Patient} from './patient.entity';
import {Observability} from '../../commons/entity';

@Entity()
export class Measure extends Observability {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'ds_hip', type: 'smallint' })
  hip: number;

  @Column({ name: 'ds_waist', type: 'smallint' })
  waist: number;

  @Column({ name: 'ds_weight', type: 'smallint' })
  weight: number;

  @ManyToOne<Patient>(_ => Patient, (patient: Patient) => patient.measures)
  patient: Patient;

  day: number;
  month: number;
  year: number;
}
