import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { FindOneOptions, Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentDto, StudentPaginationResponseDto } from './dto/student.dto';

import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async create(createStudentDto: CreateStudentDto): Promise<StudentDto> {
    const student = plainToClass(Student, createStudentDto);
    const existingStudent = await this.findByFields({
      where: {
        studentId: student.studentId,
      },
    });
    if (existingStudent) {
      throw new HttpException('Student id already exist', HttpStatus.FOUND);
    }
    return await this.studentRepository.save(student);
  }

  async findAll({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<StudentPaginationResponseDto> {
    const findQuery = this.studentRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.experiences', 'experience')
      .leftJoinAndSelect('student.educations', 'education');
    if (offset) {
      findQuery.offset(offset);
    }

    if (limit) {
      findQuery.limit(limit);
    }

    const [students, count] = await findQuery.getManyAndCount();
    return {
      count,
      students,
    };
  }

  async findOne(id: number): Promise<StudentDto> {
    return await this.studentRepository.findOne({
      where: { id },
      relations: ['experiences', 'educations'],
    });
  }

  async findByFields(options: FindOneOptions<Student>): Promise<StudentDto> {
    return await this.studentRepository.findOne(options);
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
