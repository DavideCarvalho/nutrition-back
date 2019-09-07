import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Observability} from '../../commons/entity';

@Entity()
export class Observation extends Observability {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'ds_observation', type: 'smallint'})
  hip: number;

  @Column({name: 'ds_waist', type: 'smallint'})
  waist: number;

  @Column({name: 'ds_weight', type: 'smallint'})
  weight: number;

}
