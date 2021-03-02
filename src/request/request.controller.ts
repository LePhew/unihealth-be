import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Get()
    getAll() {
        return this.requestService.getAll();
    }
    @Post('/create')
    create(@Body() data: any) {
        return this.requestService.create(data);
    }
}
