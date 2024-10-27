import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import booksJwtConfig from './books-jwt.config';
import { BooksJwtService } from './books-jwt.service';
import { AccessTokenGuard } from './guards/access-token.guard';
import { PublicAccessGuard } from './guards/public-access.guard';
import { RoleBasedGuard } from './guards/role-based.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigModule.forFeature(booksJwtConfig),
    JwtModule,
  ],
  providers: [
    BooksJwtService,
    JwtService,
    AccessTokenGuard,
    PublicAccessGuard,
    RoleBasedGuard,
  ],
  exports: [
    BooksJwtService,
    ConfigModule.forFeature(booksJwtConfig),
    JwtService,
    AccessTokenGuard,
    PublicAccessGuard,
    RoleBasedGuard,
  ],
})
export class BooksJwtModule {}
