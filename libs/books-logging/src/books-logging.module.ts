import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksLoggingService } from './books-logging.service';


@Global()
@Module({
  imports: [ConfigModule],
  providers: [BooksLoggingService],
  exports: [BooksLoggingService],
})
export class BooksLoggingModule {}
