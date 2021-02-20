import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RequestEntity } from '../entities/request.entity';
import { IRequest } from 'src/interfaces/IRequest';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(RequestEntity) private requestRepository: Repository<RequestEntity>) { }

    async getAll() {
        return await this.requestRepository.find();
    }

    async getOne(id: string) {
        return await this.requestRepository.findOne({ where: { id } });
    }

    async create(data: IRequest) {
        let request = this.requestRepository.create();
        request.address = data.address;
        request.city = data.city;
        request.country = data.country;
        request.note = data.note;
        request.title = data.title;
        request.bloodType = data.bloodType;
        request.responseDate = data.responseDate;
        await this.requestRepository.save(request);
        return request;
    }

    async delete(id: string) {
        await this.requestRepository.delete(id);
        return { requestDeleted: true };
    }
}
