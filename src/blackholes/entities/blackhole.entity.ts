import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Blackhole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mass: string;

  @Column()
  distance: string;

  @Column()
  description: string;
}
