import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Get('/getold')
    getOld() {
        return this.requestService.getOld();
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.requestService.getOne(id);
    }

    @Post()
    getAll(@Body() data: any) {
        return this.requestService.getAll(data.skip, data.take);
    }
    @Post('/getByProvince')
    getByProvince(@Body() data: any) {
        return this.requestService.getAllByProvince(data.provinceId);
    }

    @Post('/create')
    create(@Body() data: any) {
        return this.requestService.create(data);
    }

}
