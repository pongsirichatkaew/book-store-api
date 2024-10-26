import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksDatabaseModule } from 'libs/books-database/src/books-database.module';
import { BooksJwtModule } from 'libs/books-jwt/books-jwt.module';
import { BooksIamController } from './books-iam.controller';
import { BooksIamService } from './books-iam.service';

@Module({
  imports: [BooksDatabaseModule, BooksJwtModule],
  controllers: [BooksIamController],
  providers: [BooksIamService],
})
export class BooksIamModule {}
