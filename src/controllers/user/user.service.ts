import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) { }

    /*
    This function extracts all the column names from the repository so we don't have to specify
    them on the places that we require all columns.

    This allows us to keep the {select: false } on the entities
    */
    getCols<T>(repository: Repository<T>): (keyof T)[] {
        return (repository.metadata.columns.map(col => col.propertyName) as (keyof T)[]);
    }

    async getAll() {
        return await this.userRepository.find();
    }

    async getById(id: string) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async getByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email }, select: this.getCols(this.userRepository) })
    }

    async create(data: any) {
        let user = this.userRepository.create(data);
        await this.userRepository.save(user);
        return { userCreated: true };
    }

    async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
        await this.userRepository.update(id, data);
        let user = await this.getById(id);
        return user;
    }

    async delete(id: string) {
        let user = await this.getById(id);
        user.disabled = true;
        await this.update(id, user);
        return await this.getById(id);
    }
}
