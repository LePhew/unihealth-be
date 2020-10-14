import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('notification')
export class NotificationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    blood_type: string;

    @ManyToOne(() => UserEntity, user => user.notifications)
    @Column()
    user: UserEntity;
}
