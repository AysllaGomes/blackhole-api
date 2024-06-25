import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Blackhole } from '../entities/blackhole.entity';

import { BlackholesService } from '../services/blackholes.service';

import { BlackholesController } from '../controllers/blackholes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Blackhole])],
  controllers: [BlackholesController],
  providers: [BlackholesService],
})
export class BlackholesModule {}
