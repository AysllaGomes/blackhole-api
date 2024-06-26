import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { AppService } from '../services/app.service';

import { AppController } from '../controllers/app.controller';

import { Blackhole } from '../../blackholes/entities/blackhole.entity';

import { AstronomyModule } from '../../astronomy/modules/astronomy.module';
import { BlackholesModule } from '../../blackholes/modules/blackholes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'blackholes.db',
      entities: [Blackhole],
      synchronize: true,
    }),
    MulterModule.register({
      dest: '../../../uploads',
    }),
    AstronomyModule,
    BlackholesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
