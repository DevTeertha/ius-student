import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentDto } from './dto/student.dto';

import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async create(createStudentDto: CreateStudentDto): Promise<StudentDto> {
    const student = plainToClass(Student, createStudentDto);
    return await this.studentRepository.save(student);
  }

  async findAll(): Promise<StudentDto[]> {
    return await this.studentRepository.find({
      relations: ['experiences', 'educations'],
    });
  }

  async findOne(id: number): Promise<StudentDto> {
    return await this.studentRepository.findOne({
      where: { id },
      relations: ['experiences', 'educations'],
    });
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<StudentDto> {
    const student = plainToClass(Student, updateStudentDto);
    await this.studentRepository.update({ id }, { ...student });
    return await this.findOne(id);
  }

  async remove(id: number): Promise<StudentDto> {
    const findStudent = await this.findOne(id);
    await this.studentRepository.delete(id);
    return findStudent;
  }
}
