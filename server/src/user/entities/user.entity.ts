import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EUserType } from '../enum/user.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', default: EUserType.ADMIN })
  type: EUserType;
}
