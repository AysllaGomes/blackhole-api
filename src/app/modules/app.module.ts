import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { AppService } from '../services/app.service';

import { AppController } from '../controllers/app.controller';

import { Blackhole } from '../../blackholes/entities/blackhole.entity';

import { BlackholesModule } from '../../blackholes/modules/blackholes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'blackholes.db',
      entities: [Blackhole],
      synchronize: true,
    }),
    BlackholesModule,
    MulterModule.register({
      dest: '../../../uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
