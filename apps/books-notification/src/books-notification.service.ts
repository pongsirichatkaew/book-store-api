import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { BooksLoggingService } from 'libs/books-logging/src/books-logging.service';
import {
  BooksNotificationConfig,
  BooksNotificationTopics,
} from './configs/books-notification.configs';

@Injectable()
export class BooksNotificationService {
  constructor(
    @Inject(BooksNotificationConfig.KAFKA_SERVICE_NAME)
    private readonly clientKafka: ClientKafka,
    private readonly loggerService: BooksLoggingService,
  ) {}

  async onModuleInit() {
    Object.values(BooksNotificationTopics).forEach((topic) => {
      this.clientKafka.subscribeToResponseOf(topic);
    });
    await this.clientKafka.connect();
  }

  // Send message to user_registration topic
  sendUserRegistrationNotification(data: any) {
    return this.clientKafka.emit(BooksNotificationTopics.USER_CREATED, {
      key: 'user_registration',
      value: JSON.stringify(data),
    });
  }

  sendEmailNotification(data: any) {
    return this.clientKafka.emit(BooksNotificationTopics.SEND_EMAIL, {
      key: 'email_sent',
      value: JSON.stringify(data),
    });
  }

  sendEmail() {
    this.loggerService.debug('email sent');
  }
}
