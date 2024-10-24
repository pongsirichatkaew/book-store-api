import { NestFactory } from '@nestjs/core';
import { BooksServiceModule } from './books-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksServiceModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
