import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('certification')
export class CertificationEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    valid_period_start: Date;

    @Column()
    valid_period_end: Date;
}
