import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { LocalAdminAuthGuard } from '../../auth/local-auth.guard';
import { IAdminUser } from '../../interfaces/IAdminUser';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(
        private adminService: AdminService) { }

    @UseGuards(LocalAdminAuthGuard)
    @Post('/auth')
    getAll() {
        return this.adminService.login();
    }

    @Get('/getOneById/:id')
    getOneById(@Param('id') id: string) {
        return this.adminService.getOneById(id);
    }

    @Post('/create')
    create(@Body() data: IAdminUser) {
        return this.adminService.create(data);
    }

    @Put()
    update(@Param('id') id: string, @Body() data: any) {
        return this.adminService.update(id, data);
    }

    @Delete()
    delete(@Param('id') id: string) {
        return this.adminService.delete(id);
    }

}
