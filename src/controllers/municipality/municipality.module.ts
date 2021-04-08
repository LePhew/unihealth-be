import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityController } from './municipality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalityEntity } from 'src/entities/municipality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalityEntity])],
  providers: [MunicipalityService],
  controllers: [MunicipalityController]
})
export class MunicipalityModule { }
