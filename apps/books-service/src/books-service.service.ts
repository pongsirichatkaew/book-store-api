import { Injectable } from '@nestjs/common';
import { BooksLoggingService } from 'libs/books-logging/src/books-logging.service';

@Injectable()
export class BooksServiceService {
  constructor(private readonly loggerService: BooksLoggingService) {}
  getHello(): string {
    this.loggerService.log('getHello');
    return 'Hello World! BooksServiceService';
  }

  createBook() {
    this.loggerService.log('createBook Called');
    return 'Book created';
  }
}
