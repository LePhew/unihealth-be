import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('municipality')
export class MunicipalityEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provinceId: string;

    @Column()
    municipality: string;
}