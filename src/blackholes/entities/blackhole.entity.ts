import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Blackhole {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the blackhole.',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Sagittarius A*',
    description: 'The name of the blackhole.',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: '4.1 million solar masses',
    description: 'The mass of the blackhole.',
  })
  mass: string;

  @Column()
  @ApiProperty({
    example: '26,000 light years',
    description: 'The distance of the blackhole from Earth.',
  })
  distance: string;

  @Column()
  @ApiProperty({
    example: 'The supermassive black hole at the center of the Milky Way.',
    description: 'A description of the blackhole.',
  })
  description: string;

  @Column({ nullable: true })
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'The image file of the blackhole.',
  })
  imageFilename: string;

  @Column({ nullable: true })
  @ApiProperty({
    example: '10 million km',
    description: 'The event horizon size of the blackhole.',
  })
  eventHorizonSize: string;

  @Column({ nullable: true })
  @ApiProperty({
    example: '3.2 x 10^6',
    description: 'The Schwarzschild radius of the blackhole.',
  })
  schwarzschildRadius: string;

  @Column({ nullable: true })
  @ApiProperty({
    example: '1.4 x 10^18 kg/m^3',
    description: 'The density of the blackhole.',
  })
  density: string;
}
