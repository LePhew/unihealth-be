import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BloodType } from '../enums/BloodType';

@Entity('request')
export class RequestEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 30 })
    title: string;

    @Column({ length: 3 })
    bloodType: BloodType;

    @Column({ length: 50 })
    country: string;

    @Column({ length: 50 })
    city: string;

    @Column({ length: 120 })
    address: string;

    @Column({ length: 10 })
    responseDate: string;

    @Column({ length: 14 })
    contact: string;

    @Column( { nullable: true, length: 120 })
    note: string;

}