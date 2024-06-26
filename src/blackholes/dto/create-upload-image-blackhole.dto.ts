import { ApiProperty } from '@nestjs/swagger';

export class CreateUploadImageBlackholeDto {
  @ApiProperty({
    type: 'number',
    description: 'The unique identifier of the blackhole.',
  })
  id: number;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'The image file of the blackhole.',
  })
  image: any;
}
