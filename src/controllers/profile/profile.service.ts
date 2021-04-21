import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilePictureEntity } from 'src/entities/profilePic.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(ProfilePictureEntity)
        private profileRepository: Repository<ProfilePictureEntity>,
        private readonly userService: UserService) { }

    async addProfilePicture(userId: string, pictureData: string) {

    }

    async removeProfilePicture(userId: string) {

    }
}
