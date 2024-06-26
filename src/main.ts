import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { environment } from './config/environment';

import { AppModule } from './app/modules/app.module';

async function bootstrap(): Promise<void> {
  const app: INestApplication<AppModule> = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Blackhole API')
    .setDescription('The Blackhole API description')
    .setVersion(environment.app.version)
    .addTag('blackholes')
    .build();

  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(environment.app.port);
}

bootstrap();
