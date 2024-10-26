import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import booksJwtConfig from './books-jwt.config';
import { BooksJwtService } from './books-jwt.service';
import { AccessTokenGuard } from './guards/access-token.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigModule.forFeature(booksJwtConfig),
    JwtModule,
  ],
  providers: [BooksJwtService, JwtService, AccessTokenGuard],
  exports: [
    BooksJwtService,
    ConfigModule.forFeature(booksJwtConfig),
    JwtService,
    AccessTokenGuard,
  ],
})
export class BooksJwtModule {}
