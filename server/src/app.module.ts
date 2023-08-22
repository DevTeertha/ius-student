import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'ius_student',
      entities: [],
      autoLoadEntities: true,
      keepConnectionAlive: false,
      synchronize: true,
      extra: {
        decimalNumbers: true,
      },
      bigNumberStrings: false,
      logging: false,
    }),
    AuthModule,
    StudentModule,
    EducationModule,
    ExperienceModule,
    UserModule,
  ],
})
export class AppModule {}
