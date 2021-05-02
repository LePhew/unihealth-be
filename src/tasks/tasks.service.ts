import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RequestService } from '../controllers/request/request.service';

@Injectable()
export class TasksService {

    constructor(
        private requestService: RequestService
    ) { }

    @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
    async updateOldRequests() {
        console.log("I RAN!");
        let requests = await this.requestService.getOld();
        if (requests != []) {
            requests.forEach((req) => {
                req.deleted = true;
                this.requestService.update(req.id, req);
            })
        }
    }

}
