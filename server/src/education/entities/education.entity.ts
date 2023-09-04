import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
} from 'typeorm';

import { Student } from 'src/student/entities/student.entity';
import { BaseEntity } from 'src/shared/entity/base.entity';

import { EDegreeType } from '../enum/education.enum';

@Entity('educations')
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  credits: number;

  @Column({ type: 'enum', enum: EDegreeType, default: EDegreeType.BSC })
  degreeType: EDegreeType;

  @Column()
  department: string;

  @Column({ nullable: true })
  batch: number;

  @Column()
  seassonYear: number;

  @Column({ nullable: true })
  graduationYear: number;

  @OneToOne(() => Student, (student: Student) => student.education, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  student: Student | number;

  @BeforeInsert()
  insertDate() {
    this.createdAt = new Date().toUTCString();
  }

  @BeforeUpdate()
  updateDate() {
    this.updatedAt = new Date().toUTCString();
  }
}
