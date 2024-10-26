import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BooksIamModule } from './books-iam.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksIamModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
