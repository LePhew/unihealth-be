import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './controllers/admin/admin.module';
import { ProfileModule } from './controllers/profile/profile.module';
import { RequestModule } from './controllers/request/request.module';
import { ProvienceModule } from './controllers/provience/provience.module';
import { MunicipalityModule } from './controllers/municipality/municipality.module';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    UserModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(),
    AuthModule,
    AdminModule,
    ProfileModule,
    RequestModule,
    ProvienceModule,
    MunicipalityModule,
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
