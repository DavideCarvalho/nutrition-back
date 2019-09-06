import {Module} from '@nestjs/common';
import {PatientService} from './service';
import {PatientController} from './controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MeasureRepository, PatientRepository} from './repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientRepository, MeasureRepository]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {
}
