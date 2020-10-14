import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profile_pic')
export class ProfilePictureEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "longblob" })
    data: string;
}