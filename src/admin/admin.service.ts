import * as bcrypt from "bcrypt";
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAdminUser } from '../interfaces/IAdminUser';
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

    private async getForAuthWithEmail(email: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({ where: { email }, select: ['email', 'password'] });
    }

    async getOneById(id: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({ where: { id } });
    }

    async getByEmail(email: string): Promise<AdminEntity> {
        return await this.adminRepository.findOne({ where: { email } });
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

    async auth(email: string, password: string) {
        let user = await this.getForAuthWithEmail(email);
        if (user) {
            let isValid = await bcrypt.compare(password, user.password);
            return isValid ? this.getByEmail(email) : new HttpException('Incorrect Password', HttpStatus.UNAUTHORIZED);
        }
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

}
