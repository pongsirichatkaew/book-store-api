import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BookUser } from 'libs/books-jwt/decorators/book-user.decorator';

import { BooksUserData } from 'libs/books-jwt/interfaces/books-user.interfaces';
import { BooksIamService } from './books-iam.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('iam')
export class BooksIamController {
  constructor(private readonly booksIamService: BooksIamService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.booksIamService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.booksIamService.signIn(signInDto);
  }

  // @UseGuards(AccessTokenGuard)
  @Get('test-token')
  testToken(@BookUser('email') user: BooksUserData) {
    console.log('email', user);
    return 'Ok';
  }
}
