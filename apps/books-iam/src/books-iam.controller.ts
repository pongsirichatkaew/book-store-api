import { Controller, Get } from '@nestjs/common';
import { BooksIamService } from './books-iam.service';

@Controller()
export class BooksIamController {
  constructor(private readonly booksIamService: BooksIamService) {}

  @Get()
  getHello(): string {
    return this.booksIamService.getHello();
  }
}
