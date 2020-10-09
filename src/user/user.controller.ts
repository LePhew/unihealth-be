import { Controller, Get, Delete, Put, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get('/getOneById/:id')
    getOneById(@Param('id') id: string) {
        return this.userService.getOneById(id);
    }

    @Post('/create')
    create(@Body() data: any) {
        return this.userService.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }

}
