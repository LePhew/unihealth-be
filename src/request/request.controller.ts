import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IRequest } from '../interfaces/IRequest';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Get()
    getAll() {
        return this.requestService.getAll();
    }

    @Post('create')
    create(@Body() data: IRequest) {
        return this.requestService.create(data);
    }

    @Get('byId/:id')
    getOne(@Param('id') id: string) {
        return this.requestService.getOne(id);
    }

    @Post('delete/:id')
    delete(@Param('id') id: string) {
        return this.requestService.delete(id);
    }
}
