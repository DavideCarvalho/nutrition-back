import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Patient} from './patient.entity';
import {Observability} from '../../commons/entity';

@Entity()
export class Observation extends Observability {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'ds_observation', type: 'int64'})
  hip: number;

  @Column({name: 'ds_waist', type: 'int64'})
  waist: number;

  @Column({name: 'ds_weight', type: 'int64'})
  weight: number;

  @ManyToOne<Patient>(_ => Patient, (patient: Patient) => patient.measures)
  patient: Patient;
}
