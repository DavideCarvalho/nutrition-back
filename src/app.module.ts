import {Module} from '@nestjs/common';
import {PatientModule} from './patient';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    PatientModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.APP_DATABASE_URL,
      username: process.env.APP_DATABASE_USERNAME,
      password: process.env.APP_DATABASE_PASSWORD,
      database: process.env.APP_DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
