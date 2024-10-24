import { Module } from '@nestjs/common';
import { BooksIamController } from './books-iam.controller';
import { BooksIamService } from './books-iam.service';

@Module({
  imports: [],
  controllers: [BooksIamController],
  providers: [BooksIamService],
})
export class BooksIamModule {}
