import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { BloodType } from '../enums/BloodType';
import { ProvinceEntity } from './province.entity';
import { MunicipalityEntity } from './municipality.entity';

@Entity('request')
export class RequestEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50 })
    title: string;

    @Column({ length: 3 })
    bloodType: BloodType;

 
    @OneToOne(() => ProvinceEntity)
    @JoinColumn()
    province: ProvinceEntity;
    
    @Column({default: 0, nullable: false})
    provinceId: number;

    @OneToOne(() => MunicipalityEntity)
    @JoinColumn()
    municipality: MunicipalityEntity;

    @Column({default: 0, nullable: false})
    municipalityId: number;

    @Column({ length: 120 })
    address: string;

    @Column({ length: 10 })
    responseDate: string;

    @Column({ length: 14 })
    contact: string;

    @Column( { nullable: true, length: 120 })
    note: string;

}