import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import booksJwtConfig from './books-jwt.config';
import { BooksJwtService } from './books-jwt.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigModule.forFeature(booksJwtConfig),
    JwtModule,
  ],
  providers: [BooksJwtService],
  exports: [BooksJwtService],
})
export class BooksJwtModule {}
