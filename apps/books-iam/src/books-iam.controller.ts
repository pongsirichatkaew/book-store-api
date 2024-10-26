import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
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
  signIn(@Body() signInDto: SignInDto){
    return this.booksIamService.signIn(signInDto)
  }
}
