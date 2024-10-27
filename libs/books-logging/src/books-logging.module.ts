import { Module } from '@nestjs/common';
import { BooksLoggingService } from './books-logging.service';

@Module({
  providers: [BooksLoggingService],
  exports: [BooksLoggingService],
})
export class BooksLoggingModule {}
