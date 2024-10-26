import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { BOOKS_JWT_REQUEST_KEY } from '../books-jwt.constants';
import { BooksUserData } from '../interfaces/books-user.interfaces';

export const BookUser = createParamDecorator(
  (field: keyof BooksUserData | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request[BOOKS_JWT_REQUEST_KEY];
    return field ? user?.field : user;
  },
);
