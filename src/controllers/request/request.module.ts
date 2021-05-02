import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from 'src/entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService]
})
export class RequestModule { }
