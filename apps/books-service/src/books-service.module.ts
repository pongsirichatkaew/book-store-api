import { Module } from '@nestjs/common';
import { BooksJwtModule } from 'libs/books-jwt/books-jwt.module';
import { BooksServiceController } from './books-service.controller';
import { BooksServiceService } from './books-service.service';

@Module({
  imports: [BooksJwtModule],
  controllers: [BooksServiceController],
  providers: [BooksServiceService],
})
export class BooksServiceModule {}
