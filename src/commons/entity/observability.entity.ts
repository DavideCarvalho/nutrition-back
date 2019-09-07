import {CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

export abstract class Observability {

  @CreateDateColumn()
  inserted: Date;

  @UpdateDateColumn()
  updated: Date;

  @VersionColumn()
  version: number;
}
