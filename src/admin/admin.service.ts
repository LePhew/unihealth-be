import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAdminUser } from 'src/interfaces/IAdminUser';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(AdminEntity) private adminRepository: Repository<AdminEntity>
    ) { }

    async getAll() {
        return await this.adminRepository.find();
    }

    async getOneById(id: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({ where: { id } });
    }

    async create(data: IAdminUser) {
        let adminUser = this.adminRepository.create(data);
        await this.adminRepository.save(adminUser);
        return { created: true };
    }

    async update(id: string, data: Partial<AdminEntity>) {
        await this.adminRepository.update(id, data);
        return await this.getOneById(id);
    }

    async delete(id: string) {
        let user = await this.getOneById(id);
        user.disabled = true;
        await this.adminRepository.update(id, user);
        return { userDeleted: true };
    }

}
