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

import { AccessTokenGuard } from 'libs/books-jwt/guards/access-token.guard';
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

  @UseGuards(AccessTokenGuard)
  @Get('test-token')
  testToken(@Request() request) {
    console.log('req', request.user);
    return 'Ok';
  }
}
