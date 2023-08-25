import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
} from 'class-validator';
import {
  EStudentType,
  EGender,
  EMaritalStatus,
  EReligion,
} from '../enum/student.enum';
import { EducationDto } from 'src/education/dto/education.dto';
import { ExperienceDto } from 'src/experience/dto/experience.dto';

export class CreateStudentDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 212010110, name: 'studentId', required: true })
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1, name: 'batch', required: true })
  batch: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Teertha Dev', name: 'firstName', required: true })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Sarker', name: 'lastName', required: true })
  lastName: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: EStudentType,
    example: EStudentType.REGULAR,
    name: 'type',
    required: true,
  })
  type: EStudentType;

  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: EGender,
    example: EGender.MALE,
    name: 'gender',
    required: true,
  })
  gender: EGender;

  @IsNotEmpty()
  @ApiProperty({
    example: new Date().toUTCString(),
    name: 'dateOfBirth',
    required: true,
  })
  dateOfBirth: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Bangladesh', name: 'country', required: true })
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Bangladesh',
    name: 'presentAddress',
    required: true,
  })
  presentAddress: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Bangladesh',
    name: 'permanentAddress',
    required: true,
  })
  permanentAddress: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: EMaritalStatus,
    example: EMaritalStatus.SINGLE,
    name: 'maritalStatus',
    required: true,
  })
  maritalStatus: EMaritalStatus;

  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: EReligion,
    example: EReligion.HINDU,
    name: 'religion',
    required: true,
  })
  religion: EReligion;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Bangladesh', name: 'imgUrl', required: true })
  imgUrl: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    example: 'devteertha28@gmail.com',
    name: 'email',
    required: false,
    nullable: true,
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: '01672066834', name: 'phone', required: true })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Phanindra Sarker',
    name: 'fatherName',
    required: true,
  })
  fatherName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123456789789', name: 'fatherPhone', required: true })
  fatherPhone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Rita Sarker', name: 'motherName', required: true })
  motherName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '123456789789', name: 'motherPhone', required: true })
  motherPhone: string;

  @IsOptional()
  @ApiProperty({
    type: [EducationDto],
    example: [
      {
        credits: 140,
        instituteName: 'The International University Of Scholars',
        degreeType: 'BSC',
        degreeName: 'Bachelor of Science',
        department: 'Computer Science & Engineering',
        batch: 10,
        seassonYear: 2018,
        graduationYear: 2024,
        isCurrent: true,
        student: 1,
      },
    ],
    isArray: true,
    name: 'educations',
    required: true,
  })
  educations: EducationDto[];

  @IsOptional()
  @ApiProperty({
    type: [ExperienceDto],
    example: [
      {
        companyName: 'Mind Orbital Technologies',
        jobType: 'Full Time',
        adress: '27 no college road',
        country: 'Bangladesh',
        designation: 'Software Engineer',
        startFrom: 'Fri, 25 Aug 2023 17:35:58 GMT',
        endFrom: 'Fri, 25 Aug 2023 17:35:58 GMT',
        isCurrentEmployee: true,
        student: 1,
      },
    ],
    isArray: true,
    name: 'experiences',
    required: true,
  })
  experiences: ExperienceDto[];
}
