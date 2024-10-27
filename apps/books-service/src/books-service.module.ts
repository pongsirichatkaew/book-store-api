import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { BooksJwtModule } from 'libs/books-jwt/books-jwt.module';
import { RoleBasedGuard } from 'libs/books-jwt/guards/role-based.guard';
import { BooksLoggingModule } from 'libs/books-logging/src/books-logging.module';
import { BooksServiceController } from './books-service.controller';
import { BooksServiceService } from './books-service.service';

@Module({
  imports: [BooksJwtModule, BooksLoggingModule],
  controllers: [BooksServiceController],
  providers: [
    BooksServiceService,
    { provide: APP_GUARD, useClass: RoleBasedGuard },
  ],
})
export class BooksServiceModule {}
