import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'libs/books-jwt/guards/access-token.guard';
import { BooksServiceService } from './books-service.service';

@Controller('books')
export class BooksServiceController {
  constructor(private readonly booksServiceService: BooksServiceService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  getHello(): string {
    return this.booksServiceService.getHello();
  }
}
