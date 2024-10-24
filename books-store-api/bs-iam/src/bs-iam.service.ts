import { Injectable } from '@nestjs/common';

@Injectable()
export class BsIamService {
  getHello(): string {
    return 'Hello World!';
  }
}
