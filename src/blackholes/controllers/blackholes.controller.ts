import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { extname } from 'path';
import { diskStorage } from 'multer';

import { Blackhole } from '../entities/blackhole.entity';

import { BlackholesService } from '../services/blackholes.service';

@ApiTags('blackholes')
@Controller('blackholes')
export class BlackholesController {
  constructor(private readonly blackholesService: BlackholesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all blackholes' })
  @ApiResponse({ status: 200, description: 'List of blackholes.' })
  findAll(): Promise<Blackhole[]> {
    return this.blackholesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a blackhole by ID' })
  @ApiResponse({ status: 200, description: 'The found blackhole.' })
  @ApiResponse({ status: 404, description: 'Blackhole not found.' })
  findOne(@Param('id') id: number): Promise<Blackhole> {
    return this.blackholesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new blackhole' })
  @ApiResponse({ status: 201, description: 'The created blackhole.' })
  create(@Body() blackhole: Blackhole): Promise<Blackhole> {
    return this.blackholesService.create(blackhole);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a blackhole by ID' })
  @ApiResponse({ status: 200, description: 'The updated blackhole.' })
  update(
    @Param('id') id: number,
    @Body() blackhole: Blackhole,
  ): Promise<Blackhole> {
    return this.blackholesService.update(id, blackhole);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blackhole by ID' })
  @ApiResponse({ status: 200, description: 'The deleted blackhole.' })
  @ApiResponse({ status: 404, description: 'Blackhole not found.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.blackholesService.remove(id);
  }

  @Post('upload')
  @ApiOperation({ summary: 'Upload an image for a blackhole' })
  @ApiResponse({ status: 201, description: 'The uploaded image file.' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: '../../../uploads',
        filename: (request, file, callback) => {
          const randomName: string = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return callback(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Blackhole,
  ): Promise<Blackhole> {
    return this.blackholesService.saveImageFilename(body.id, file.filename);
  }
}
