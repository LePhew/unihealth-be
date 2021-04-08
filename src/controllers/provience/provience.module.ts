import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvienceController } from './provience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceEntity } from 'src/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinceEntity])],
  providers: [ProvinceService],
  controllers: [ProvienceController]
})
export class ProvienceModule { }
