import { Controller, Get, Delete, Put, Post, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IUser } from '../../interfaces/IUser';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get('/getOneById/:id')
    getOneById(@Param('id') id: string) {
        return this.userService.getById(id);
    }

    @Post('/create')
    create(@Body() data: IUser) {
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
