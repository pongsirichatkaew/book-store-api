import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.BOOK_DB_HOST,
      port: +process.env.BOOK_DB_PORT,
      username: process.env.BOOK_DB_USER,
      password: process.env.BOOK_DB_PASSWORD,
      database: process.env.BOOK_DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class BooksDatabaseModule {}
