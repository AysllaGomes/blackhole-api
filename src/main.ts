import { NestFactory } from '@nestjs/core';

import { environment } from './config/environment';

import { AppModule } from './app/modules/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  await app.listen(environment.app.port);
}

bootstrap();
