import { ApiProperty } from '@nestjs/swagger';

import { EDegreeType } from '../enum/education.enum';
import { Student } from 'src/student/entities/student.entity';

export class EducationDto {
  @ApiProperty({ example: 140 })
  credits: number;

  @ApiProperty({ example: 'The International University Of Scholars' })
  instituteName: string;

  @ApiProperty({
    type: EDegreeType,
    default: EDegreeType.BSC,
    enum: EDegreeType,
  })
  degreeType: EDegreeType;

  @ApiProperty({ example: 'Bachelor of Science' })
  degreeName: string;

  @ApiProperty({ example: 'Computer Science & Engineering' })
  department: string;

  @ApiProperty({ example: '10th Batch' })
  batch: string;

  @ApiProperty({ example: new Date().toUTCString() })
  seassonYear: Date;

  @ApiProperty({ example: new Date().toUTCString() })
  graduationYear: Date;

  @ApiProperty({ example: true })
  isCurrent: boolean;

  @ApiProperty({ type: Student, example: Student })
  student: Student | number;
}
