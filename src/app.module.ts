import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProfileModule } from './profile/profile.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), AuthModule, AdminModule, ProfileModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
