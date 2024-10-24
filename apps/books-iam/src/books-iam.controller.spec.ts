import { Test, TestingModule } from '@nestjs/testing';
import { BooksIamController } from './books-iam.controller';
import { BooksIamService } from './books-iam.service';

describe('BooksIamController', () => {
  let booksIamController: BooksIamController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksIamController],
      providers: [BooksIamService],
    }).compile();

    booksIamController = app.get<BooksIamController>(BooksIamController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(booksIamController.getHello()).toBe('Hello World!');
    });
  });
});
