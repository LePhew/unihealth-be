import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';

@Injectable()
export class AdminService {

    constructor(@InjectRepository(AdminEntity) private adminRepository: Repository<AdminEntity>){}

    async getAll() {
        return await this.adminRepository.find();
    }

    async getOne(id: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({ where: { id } })
    }

}
