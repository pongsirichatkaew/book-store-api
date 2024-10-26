import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import booksJwtConfig from '../books-jwt.config';
import { BOOKS_JWT_REQUEST_KEY } from '../books-jwt.constants';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(booksJwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof booksJwtConfig>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    console.log(' this.jwtConfiguration', this.jwtConfiguration);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const jwtPayload = await this.jwtService.verifyAsync(
        token,
        this.jwtConfiguration,
      );
      request[BOOKS_JWT_REQUEST_KEY] = jwtPayload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token ?? '';
  }
}
