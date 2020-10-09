import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from 'src/interfaces/IUser';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) { }

    async getAll() {
        return await this.userRepository.find();
    }

    async getOneById(id: string) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email } })
    }

    async create(data: IUser) {
        let user = this.userRepository.create(data);
        await this.userRepository.save(user);
        return { userCreated: true };
    }

    async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
        await this.userRepository.update(id, data);
        let user = await this.getOneById(id);
        return user;
    }

    async delete(id: string){
        let user = await this.getOneById(id);
        user.disabled = true;
        await this.update(id, user);
        return await this.getOneById(id);
    }

}
