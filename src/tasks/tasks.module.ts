import { Module } from '@nestjs/common';
import { RequestModule } from '../controllers/request/request.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [RequestModule],
  providers: [TasksService]
})
export class TasksModule { }
