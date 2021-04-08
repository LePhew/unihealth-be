import { Controller, Get } from '@nestjs/common';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvienceController {

    constructor(private provinceService: ProvinceService) { }

    @Get()
    getAll() {
        return this.provinceService.getAll();
    }
}
