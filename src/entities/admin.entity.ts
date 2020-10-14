import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

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

    @Column({ unique: true })
    email: string;

    @Column()
    disabled: boolean;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}