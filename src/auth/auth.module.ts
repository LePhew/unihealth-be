import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AdminModule } from '../controllers/admin/admin.module';
import { UserModule } from '../controllers/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, AdminModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule { }