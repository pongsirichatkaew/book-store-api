import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BooksLoggingModule } from 'libs/books-logging/src/books-logging.module';
import { BooksNotificationController } from './books-notification.controller';
import { BooksNotificationService } from './books-notification.service';
import { BooksNotificationConfig } from './configs/books-notification.configs';

@Module({
  imports: [
    BooksLoggingModule,
    ClientsModule.register([
      {
        name: BooksNotificationConfig.KAFKA_SERVICE_NAME,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_GROUP_ID,
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: process.env.KAFKA_GROUP_ID,
          },
        },
      },
    ]),
  ],
  controllers: [BooksNotificationController],
  providers: [BooksNotificationService],
  exports: [BooksNotificationService],
})
export class BooksNotificationModule {}
