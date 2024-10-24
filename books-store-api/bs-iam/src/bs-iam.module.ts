import { Module } from '@nestjs/common';
import { BsIamController } from './bs-iam.controller';
import { BsIamService } from './bs-iam.service';

@Module({
  imports: [],
  controllers: [BsIamController],
  providers: [BsIamService],
})
export class BsIamModule {}
