import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'libs/books-jwt/decorators/roles.decorator';
import { Role } from 'libs/books-jwt/enums/roles.enums';
import { RoleBasedGuard } from 'libs/books-jwt/guards/role-based.guard';
import { BooksServiceService } from './books-service.service';

@Controller('books')
export class BooksServiceController {
  constructor(private readonly booksServiceService: BooksServiceService) {}

  @Get()
  getHello(): string {
    return this.booksServiceService.getHello();
  }
  
  @Roles(Role.Admin)
  @Post()
  postBook() {
    return this.booksServiceService.getHello();
  }
}
