import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BloodType } from "../enums/BloodType";


@Entity('user')
export class UserEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firebase_id: string;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    lastname: string;

    @Column()
    age: number;

    @Column()
    identity_document: string;

    @Column("enum", {enum: BloodType})
    bloody_type: BloodType;

    @Column()
    phone: number;

    @Column({length: 255, unique: true})
    email: string;

    @Column()
    password: string;

    @Column({length: 50})
    address: string;

    @Column()
    donor: number;

    @Column()
    certification_id: string;

    @Column()
    profile_pic_id: string;

}