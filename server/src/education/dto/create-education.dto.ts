import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

import { EDegreeType } from '../enum/education.enum';
import { Student } from 'src/student/entities/student.entity';

export class CreateEducationDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 140 })
  credits: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'The International University Of Scholars' })
  instituteName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: EDegreeType,
    default: EDegreeType.BSC,
    enum: EDegreeType,
  })
  degreeType: EDegreeType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Bachelor of Science' })
  degreeName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Computer Science & Engineering' })
  department: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '10th Batch' })
  batch: string;

  @IsNotEmpty()
  @ApiProperty({ example: new Date().toUTCString() })
  seassonYear: Date;

  @IsOptional()
  @ApiProperty({ example: new Date().toUTCString() })
  graduationYear: Date;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: true })
  isCurrent: boolean;

  @IsOptional()
  @ApiProperty({ type: Student, example: 1 })
  student: Student | number;
}
