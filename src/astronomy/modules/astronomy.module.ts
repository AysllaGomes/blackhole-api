import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AstronomyService } from '../services/astronomy.service';

import { AstronomyController } from '../controllers/astronomy.controller';

@Module({
  imports: [HttpModule],
  providers: [AstronomyService],
  controllers: [AstronomyController],
  exports: [AstronomyService],
})
export class AstronomyModule {}
