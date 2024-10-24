import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksIamService {
  getHello(): string {
    return 'Hello World!';
  }
}
