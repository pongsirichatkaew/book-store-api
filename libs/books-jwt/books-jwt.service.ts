import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import booksJwtConfig from './books-jwt.config';

@Injectable()
export class BooksJwtService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(booksJwtConfig.KEY)
    private readonly configService: ConfigType<typeof booksJwtConfig>,
  ) {}

  async signToken<T>(userId: number, payload?: T) {
    const jwtSignOption: JwtSignOptions = {
      expiresIn: this.configService.accessTokenTtl,
      secret: this.configService.secret,
      audience: this.configService.audience,
      issuer: this.configService.issuer,
    };

    console.log('jwtSignOption', jwtSignOption);
    return this.jwtService.signAsync(
      { sub: userId, ...payload },
      jwtSignOption,
    );
  }
}
