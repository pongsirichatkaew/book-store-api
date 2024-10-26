import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class PublicAccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    return true;
  }
}
