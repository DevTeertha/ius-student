import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Student } from 'src/student/entities/student.entity';
import { BaseEntity } from 'src/shared/entity/base.entity';

@Entity('experiences')
export class Experience extends BaseEntity {
  @Column()
  companyName: string;

  @Column()
  jobType: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postCode: string;

  @Column()
  country: string;

  @Column()
  designation: string;

  @Column()
  startFrom: string;

  @Column()
  endFrom: string;

  @Column({ default: true })
  isCurrentEmployee: boolean;

  @ManyToOne(() => Student, (student: Student) => student.experiences, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student | number;

  @BeforeInsert()
  insertDate() {
    this.created_at = new Date().toUTCString();
  }

  @BeforeUpdate()
  updateDate() {
    this.updated_at = new Date().toUTCString();
  }
}
