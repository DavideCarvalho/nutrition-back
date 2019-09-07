import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Measure} from './measure.entity';
import {Observability} from '../../commons/entity';
import {deserialize, serialize} from 'class-transformer';
import {PatientDTO} from '../dto';

@Entity('pacient')
export class Patient extends Observability {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100, name: 'nm_patient', type: 'varchar'})
  name: string;

  @Column({name: 'ds_sex', type: 'varchar', length: 20})
  sex: string;

  @Column({name: 'ds_birthday_day', type: 'smallint'})
  birthdayDay: number;

  @Column({name: 'ds_birthday_month', type: 'smallint'})
  birthdayMonth: number;

  @Column({name: 'ds_birthday_year', type: 'smallint'})
  birthdayYear: number;

  @OneToMany<Measure>(_ => Patient, (measure: Measure) => measure.patient)
  measures: Measure[];

}
