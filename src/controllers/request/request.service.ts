import { Raw, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestEntity } from '../../entities/request.entity';
import { IRequest } from '../../interfaces/IRequest';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(RequestEntity) private requestRepository: Repository<RequestEntity>) { }

    async getAll(skip: number, take: number) {
        return await this.requestRepository.find({
            relations: ["province", "municipality"], skip: skip, take: take, where: {
                deleted: 0
            }
        });
    }

    async getAllByProvince(provinceId: number) {
        return await this.requestRepository.find({
            relations: ["province", "municipality"],
            where: { provinceId },
        })
    }

    async getOne(id: string) {
        let request = await this.requestRepository.findOne({ where: { id } });
        console.log(request.createdDate);
        return request;
    }

    async getOld() {
        let time = new Date();
        const request = await this.requestRepository.find({
            where: {
                //Raw allows a regular query execution on mysql
                createdDate: Raw(alias => `${alias} < now() - INTERVAL 30 DAY`),
                deleted: 0
            }
        });
        return request;
    }

    async create(data: IRequest) {
        let request = this.requestRepository.create();
        request.address = data.address;
        request.provinceId = data.provinceId;
        request.municipalityId = data.municipalityId;
        request.note = data.note;
        request.title = data.title;
        request.bloodType = data.bloodType;
        request.responseDate = data.responseDate;
        request.contact = data.contact;
        await this.requestRepository.save(request);
        return request;
    }

    async delete(id: string) {
        await this.requestRepository.delete(id);
        return { requestDeleted: true };
    }

    async update(id: string, data: Partial<RequestEntity>) {
        return await this.requestRepository.update(id, data);
    }
}
