import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MunicipalityEntity } from '../../entities/municipality.entity';

@Injectable()
export class MunicipalityService {

    constructor(@InjectRepository(MunicipalityEntity) private municipalityRepository: Repository<MunicipalityEntity>) { }

    async getAll() {
        return await this.municipalityRepository.find();
    }

    async getOne(id: string) {
        return await this.municipalityRepository.findOne({ where: { id } });
    }
}
