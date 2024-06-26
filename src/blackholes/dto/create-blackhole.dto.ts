import { Column } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export class CreateBlackholeDto {
  @ApiProperty({
    example: 'Sagittarius A*',
    type: 'string',
    description: 'The name of the blackhole.',
  })
  name: string;

  @ApiProperty({
    example: '4.1 million solar masses',
    type: 'string',
    description: 'The mass of the blackhole.',
  })
  mass: string;

  @ApiProperty({
    example: '26,000 light years',
    type: 'string',
    description: 'The distance of the blackhole from Earth.',
  })
  distance: string;

  @ApiProperty({
    example: 'The supermassive black hole at the center of the Milky Way.',
    type: 'string',
    description: 'A description of the blackhole.',
  })
  description: string;

  @Column({ nullable: true })
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'The image file of the blackhole.',
  })
  image: string;

  @ApiProperty({
    example: '10 million km',
    type: 'string',
    description: 'The event horizon size of the blackhole.',
    required: false,
  })
  eventHorizonSize?: string;

  @ApiProperty({
    example: '3.2 x 10^6',
    type: 'string',
    description: 'The Schwarzschild radius of the blackhole.',
    required: false,
  })
  schwarzschildRadius?: string;

  @ApiProperty({
    example: '1.4 x 10^18 kg/m^3',
    type: 'string',
    description: 'The density of the blackhole.',
    required: false,
  })
  density?: string;
}
