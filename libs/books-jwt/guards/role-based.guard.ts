import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BOOKS_JWT_REQUEST_KEY, ROLE_KEY } from '../books-jwt.constants';
import { AuthType } from '../enums/auth-type.enums';
import { Role } from '../enums/roles.enums';
import { BooksUserData } from '../interfaces/books-user.interfaces';
import { AccessTokenGuard } from './access-token.guard';
import { PublicAccessGuard } from './public-access.guard';

@Injectable()
export class RoleBasedGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
    private readonly publicAccess: PublicAccessGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const contextRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Public
    if (!contextRoles) {
      return this.publicAccess.canActivate(context);
    }

    // Check JWT
    await this.accessTokenGuard.canActivate(context);

    const user: BooksUserData = context.switchToHttp().getRequest()[
      BOOKS_JWT_REQUEST_KEY
    ];

    return contextRoles.some((ctxRole) => ctxRole === user.role);
  }
}
