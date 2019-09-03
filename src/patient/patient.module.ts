import {Module} from '@nestjs/common';
import {PatientService} from './service';
import {PatientController} from './controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PatientRepository} from './repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientRepository]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {
}
