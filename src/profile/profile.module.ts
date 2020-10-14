import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilePictureEntity } from 'src/entities/profilePic.entity';
import { UserModule } from '../user/user.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePictureEntity]), UserModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule { }
