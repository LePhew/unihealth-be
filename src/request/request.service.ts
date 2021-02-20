import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestEntity } from '../entities/request.entity';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(RequestEntity) private requestRepository: Repository<RequestEntity>) { }

    async getAll() {
        return await this.requestRepository.find();
    }

    async getOne(id: string) {
        return await this.requestRepository.findOne({ where: { id } });
    }

    async create(data: any) {
        let request = this.requestRepository.create();
        request.address = data.address;
        request.city = data.city;
        request.country = data.country;
        request.note = data.note;
        request.title = data.title;
        request.bloodType = data.bloodType;
        request.responseDate = request.responseDate;
        await this.requestRepository.save(request);
        return request;
    }

    async delete(id: string) {
        await this.requestRepository.delete(id);
        return { requestDeleted: true };
    }
}
