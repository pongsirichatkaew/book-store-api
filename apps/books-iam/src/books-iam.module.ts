import { Module } from '@nestjs/common';
import { BooksDatabaseModule } from 'libs/books-database/src/books-database.module';
import { BooksJwtModule } from 'libs/books-jwt/books-jwt.module';
import { BooksLoggingModule } from 'libs/books-logging/src/books-logging.module';
import { BooksNotificationModule } from 'apps/books-notification/src/books-notification.module';
import { BooksIamController } from './books-iam.controller';
import { BooksIamService } from './books-iam.service';

@Module({
  imports: [
    BooksDatabaseModule,
    BooksJwtModule,
    BooksLoggingModule,
    BooksNotificationModule,
  ],
  controllers: [BooksIamController],
  providers: [BooksIamService],
})
export class BooksIamModule {}
