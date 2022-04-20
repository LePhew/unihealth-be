import { DonorStatus } from '../enums/DonorStatus';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { BloodType } from '../enums/BloodType';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column('enum', { enum: BloodType })
  bloody_type: BloodType;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ length: 50, nullable: true })
  address: string;

  @Column('enum', { enum: DonorStatus })
  donor: DonorStatus;

  @Column({ nullable: true })
  certification_id: string;

  @Column({ nullable: true })
  profile_pic_id: string;

  @Column({ default: 0 })
  disabled: boolean;

  @Column({ default: null })
  notifications: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  last_updated_date: Date;

  @BeforeInsert()
  emailToLowerCase() {
    this.email.toLowerCase();
  }

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
