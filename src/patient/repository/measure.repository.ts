import {EntityRepository, Repository} from 'typeorm';
import {Measure} from '../entity';

@EntityRepository(Measure)
export class MeasureRepository extends Repository<Measure> {
}
