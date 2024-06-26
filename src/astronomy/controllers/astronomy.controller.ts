import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AstronomyService } from '../services/astronomy.service';

@ApiTags('astronomy')
@Controller('astronomy')
export class AstronomyController {
  constructor(private readonly astronomyService: AstronomyService) {}

  @Get('planetary-positions')
  @ApiOperation({ summary: 'Get planetary positions from external API' })
  @ApiResponse({ status: 200, description: 'Data from external API.' })
  async getPlanetaryPositions(
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
    @Query('elevation') elevation: number,
    @Query('from_date') from_date: string,
    @Query('to_date') to_date: string,
    @Query('time') time: string,
  ): Promise<any> {
    return this.astronomyService.getPlanetaryPositions({
      longitude,
      latitude,
      elevation,
      from_date,
      to_date,
      time,
    });
  }

  @Get('star-chart')
  @ApiOperation({ summary: 'Get star chart from external API' })
  @ApiResponse({ status: 200, description: 'Data from external API.' })
  async getStarChart(): Promise<any> {
    return this.astronomyService.getStarChart();
  }

  @Get('moon-phase')
  @ApiOperation({ summary: 'Get moon phase from external API' })
  @ApiResponse({ status: 200, description: 'Data from external API.' })
  async getMoonPhase(): Promise<any> {
    return this.astronomyService.getMoonPhase();
  }

  @Get('search')
  @ApiOperation({ summary: 'Search for astronomical data from external API' })
  @ApiResponse({ status: 200, description: 'Data from external API.' })
  async search(@Query('query') query: string): Promise<any> {
    return this.astronomyService.search(query);
  }
}
