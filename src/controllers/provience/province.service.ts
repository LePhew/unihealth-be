import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvinceEntity } from '../../entities/province.entity';

@Injectable()
export class ProvinceService {

    constructor(@InjectRepository(ProvinceEntity) private provinceRepository: Repository<ProvinceEntity>) { }

    async getAll() {
        return await this.provinceRepository.find();
    }

    async getOne(id: string) {
        return await this.provinceRepository.findOne({ where: { id } });
    }

}
