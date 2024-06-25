import {
  // Body,
  Controller,
  // Delete,
  Get,
  // Param,
  // Post,
  // Put,
} from '@nestjs/common';

import { Blackhole } from '../entities/blackhole.entity';

import { BlackholesService } from '../services/blackholes.service';

@Controller('blackholes')
export class BlackholesController {
  constructor(protected readonly blackholesService: BlackholesService) {}

  @Get()
  findAll(): Promise<Blackhole[]> {
    return this.blackholesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number): Promise<Blackhole> {
  //   return this.blackholesService.findOne(id);
  // }
  //
  // @Post()
  // create(@Body() blackhole: Blackhole): Promise<Blackhole> {
  //   return this.blackholesService.create(blackhole);
  // }
  //
  // @Put(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() blackhole: Blackhole,
  // ): Promise<Blackhole> {
  //   return this.blackholesService.update(id, blackhole);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: number): Promise<void> {
  //   return this.blackholesService.remove(id);
  // }
}
