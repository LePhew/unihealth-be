import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('provinces')
export class ProvinceEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    province: string;
}