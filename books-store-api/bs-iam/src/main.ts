import { NestFactory } from '@nestjs/core';
import { BsIamModule } from './bs-iam.module';

async function bootstrap() {
  const app = await NestFactory.create(BsIamModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
