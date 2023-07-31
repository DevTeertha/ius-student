import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

import {
  EStudentType,
  EGender,
  EMaritalStatus,
  EReligion,
} from '../enum/student.enum';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 212010110, name: 'studentId', required: true })
  studentId?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Teertha Dev', name: 'firstName', required: true })
  firstName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Sarker', name: 'lastName', required: true })
  lastName?: string;

  @IsOptional()
  @ApiProperty({
    type: 'enum',
    enum: EStudentType,
    example: EStudentType.REGULAR,
    name: 'type',
    required: false,
  })
  type?: EStudentType;

  @IsOptional()
  @ApiProperty({
    type: 'enum',
    enum: EGender,
    example: EGender.MALE,
    name: 'gender',
    required: false,
  })
  gender?: EGender;

  @IsOptional()
  @ApiProperty({
    example: new Date().toUTCString(),
    name: 'dateOfBirth',
    required: false,
  })
  dateOfBirth?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Bangladesh', name: 'country', required: true })
  country?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Bangladesh',
    name: 'presentAddress',
    required: false,
  })
  presentAddress?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Bangladesh',
    name: 'permanentAddress',
    required: false,
  })
  permanentAddress?: string;

  @IsOptional()
  @ApiProperty({
    type: 'enum',
    enum: EMaritalStatus,
    example: EMaritalStatus.SINGLE,
    name: 'maritalStatus',
    required: false,
  })
  maritalStatus?: EMaritalStatus;

  @IsOptional()
  @ApiProperty({
    type: 'enum',
    enum: EReligion,
    example: EReligion.HINDU,
    name: 'religion',
    required: false,
  })
  religion?: EReligion;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Bangladesh', name: 'imgUrl', required: true })
  imgUrl?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({
    example: 'devteertha28@gmail.com',
    name: 'email',
    required: true,
  })
  email: string;

  @IsOptional()
  @ApiProperty({ example: '01672066834', name: 'phone', required: true })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Phanindra Sarker',
    name: 'fatherName',
    required: false,
  })
  fatherName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123456789789', name: 'fatherPhone', required: true })
  fatherPhone?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Rita Sarker', name: 'motherName', required: true })
  motherName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123456789789', name: 'motherPhone', required: true })
  motherPhone?: string;
}
