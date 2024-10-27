import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksLoggingService } from './books-logging.service';

@Module({
  imports: [ConfigModule],
  providers: [BooksLoggingService],
  exports: [BooksLoggingService],
})
export class BooksLoggingModule {}
