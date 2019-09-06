import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Measure} from './measure.entity';

@Entity('pacient')
export class Patient {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100, name: 'nm_patient', type: 'varchar'})
  name: string;

  @Column({name: 'ds_sex', type: 'varchar', length: 20})
  sex: string;

  @Column({name: 'ds_birthday_day', type: 'int64'})
  birthdayDay: number;

  @Column({name: 'ds_birthday_month', type: 'int64'})
  birthdayMonth: number;

  @Column({name: 'ds_birthday_year', type: 'int64'})
  birthdayYear: number;

  @OneToMany<Measure>(_ => Patient, (measure: Measure) => measure.patient)
  measures: Measure[];

}
