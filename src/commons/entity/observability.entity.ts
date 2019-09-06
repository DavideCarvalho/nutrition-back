import {CreateDateColumn, Entity, UpdateDateColumn, VersionColumn} from 'typeorm';

@Entity()
export abstract class Observability {

  @CreateDateColumn()
  inserted: Date;

  @UpdateDateColumn()
  updated: Date;

  @VersionColumn()
  version: number;
}
