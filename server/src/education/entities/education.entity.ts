import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
  BeforeInsert,
  BeforeUpdate,
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

  @Column()
  instituteName: string;

  @Column({ type: 'enum', enum: EDegreeType, default: EDegreeType.BSC })
  degreeType: EDegreeType;

  @Column()
  degreeName: string;

  @Column()
  department: string;

  @Column({ nullable: true })
  batch: number;

  @Column()
  seassonYear: number;

  @Column({ nullable: true })
  graduationYear: number;

  @Column({ default: false })
  isCurrent: boolean;

  @ManyToOne(() => Student, (student: Student) => student.id, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
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
