import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BloodType } from '../enums/BloodType';

@Entity('request')
export class RequestEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 30 })
    title: string;

    @Column()
    bloodType: BloodType;

    @Column()
    country: string;

    @Column({ length: 255 })
    city: string;

    @Column()
    address: string;

    @Column()
    responseDate: Date;

    @Column()
    note: string;

}