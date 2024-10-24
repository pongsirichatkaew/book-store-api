import { Test, TestingModule } from '@nestjs/testing';
import { BsIamController } from './bs-iam.controller';
import { BsIamService } from './bs-iam.service';

describe('BsIamController', () => {
  let bsIamController: BsIamController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BsIamController],
      providers: [BsIamService],
    }).compile();

    bsIamController = app.get<BsIamController>(BsIamController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bsIamController.getHello()).toBe('Hello World!');
    });
  });
});
