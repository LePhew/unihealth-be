import { Controller, Get } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) { }

    @Get()
    getAll() {
        return this.requestService.getAll();
    }
}
