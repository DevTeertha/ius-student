import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
} from 'typeorm';

import { Student } from 'src/student/entities/student.entity';

import { EDegreeType } from '../enum/education.enum';

@Entity('educations')
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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
  batch: string;

  @Column()
  seassonYear: Date;

  @Column({ nullable: true })
  graduationYear: Date;

  @Column({ default: false })
  isCurrent: boolean;

  @ManyToOne(() => Student, (student: Student) => student.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student | number;
}
