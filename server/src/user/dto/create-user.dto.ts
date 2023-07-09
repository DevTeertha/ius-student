import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Tertha Dev', name: 'firstName field' })
  firstName: string;

  @ApiProperty({ example: 'Sarker', name: 'lastName field' })
  lastName: string;

  @ApiProperty({ example: 'Sarker', name: 'lastName field' })
  username: string;
}
