import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { BooksJwtModule } from 'libs/books-jwt/books-jwt.module';
import { AccessTokenGuard } from 'libs/books-jwt/guards/access-token.guard';
import { RoleBasedGuard } from 'libs/books-jwt/guards/role-based.guard';
import { BooksServiceController } from './books-service.controller';
import { BooksServiceService } from './books-service.service';

@Module({
  imports: [BooksJwtModule],
  controllers: [BooksServiceController],
  providers: [
    BooksServiceService,
    { provide: APP_GUARD, useClass: RoleBasedGuard },
  ],
})
export class BooksServiceModule {}
