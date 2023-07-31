import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, select: false })
  created_at?: string;

  @Column({ nullable: true, select: false })
  updated_at?: string;

  /* Cannot add referrence with user entity because of seeding failed! */
  /* TypeError: Class extends value undefined is not a constructor or null */
  @Column({ nullable: true, select: false })
  updated_by?: number;

  @Column({ nullable: true, select: false })
  created_by?: number;
}
