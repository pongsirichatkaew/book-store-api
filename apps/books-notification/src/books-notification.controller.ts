import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { BooksNotificationService } from './books-notification.service';
import { BooksNotificationTopics } from './configs/books-notification.configs';

@Controller()
export class BooksNotificationController {
  constructor(
    private readonly booksNotificationService: BooksNotificationService,
  ) {}

  @EventPattern(BooksNotificationTopics.USER_CREATED)
  handleUserRegistration(@Payload() message: any) {
    console.log('message', message);
    return this.booksNotificationService.sendEmailNotification(message);
  }

  @EventPattern(BooksNotificationTopics.BOOK_CREATED)
  handleBookCreated(@Payload() message: any) {
    console.log('Book Created Notification:', message.value.toString());
    // Process book created notification (e.g., alert subscribers)
  }

  @EventPattern(BooksNotificationTopics.SEND_EMAIL)
  handleSendEmail(@Payload() message: any) {}
}
