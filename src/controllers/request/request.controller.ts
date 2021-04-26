import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Post()
    getAll(@Body() data: any) {
        return this.requestService.getAll(data.skip,data.take);
    }
    @Post('/create')
    create(@Body() data: any) {
        return this.requestService.create(data);
    }
}
