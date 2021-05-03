import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './controllers/admin/admin.module';
import { ProfileModule } from './controllers/profile/profile.module';
import { RequestModule } from './controllers/request/request.module';
import { ProvienceModule } from './controllers/provience/provience.module';
import { MunicipalityModule } from './controllers/municipality/municipality.module';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    AdminModule,
    ProfileModule,
    RequestModule,
    ProvienceModule,
    MunicipalityModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
