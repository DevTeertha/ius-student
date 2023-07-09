import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'devteertha28@gmail.com',
    description: 'username/email field',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'devteertha28@gmail.com',
    description: 'password field',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
