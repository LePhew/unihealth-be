import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class AdminEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column({ select: false })
    password: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    disabled: boolean;
}