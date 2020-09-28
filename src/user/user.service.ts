import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
        ){}

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUserById(id: string){
        return await this.userRepository.findOne({ where : {id} });
    }

    async getUserByEmail(email: string){
        return await this.userRepository.findOne({ where: {email} })
    }
}
