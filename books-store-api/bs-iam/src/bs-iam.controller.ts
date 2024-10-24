import { Controller, Get } from '@nestjs/common';
import { BsIamService } from './bs-iam.service';

@Controller()
export class BsIamController {
  constructor(private readonly bsIamService: BsIamService) {}

  @Get()
  getHello(): string {
    return this.bsIamService.getHello();
  }
}
