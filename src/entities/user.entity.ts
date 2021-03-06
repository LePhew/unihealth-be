import { DonorStatus } from "src/enums/DonorStatus";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { BloodType } from "../enums/BloodType";


@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    firebase_id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    lastname: string;

    @Column()
    age: number;

    @Column()
    identity_document: string;

    @Column()
    identity_document_type_id: number;

    @Column("enum", { enum: BloodType })
    bloody_type: BloodType;

    @Column()
    phone: number;

    @Column({ length: 255, unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column({ length: 50 })
    address: string;

    @Column("enum", { enum: DonorStatus })
    donor: DonorStatus;

    @Column()
    certification_id: string;

    @Column()
    profile_pic_id: string;

    @Column()
    disabled: boolean;

    @Column()
    notifications: string;

    @CreateDateColumn()
    created_date: Date;

    @UpdateDateColumn()
    last_updated_date: Date;

}