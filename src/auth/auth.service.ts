import { Injectable } from '@nestjs/common';
import { AdminService } from '../controllers/admin/admin.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly adminService: AdminService) { }

    async validateAdmin(username: string, password: string) {
        const user = await this.adminService.auth(username, password);
        if (user) {
            return user;
        }
    }

    async login() {

    }
}
