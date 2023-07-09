import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Student } from 'src/student/entities/student.entity';

@Entity('experiences')
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => Student, (student: Student) => student.id)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student | number;
}
