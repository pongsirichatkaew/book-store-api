import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'libs/books-database/src/entities/user.entity';
import { UserService } from 'libs/books-database/src/services/user.service';
import { SignUpDto } from './dto/sign-up.dto';
import { compare, genSalt, hash } from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { BooksJwtService } from 'libs/books-jwt/books-jwt.service';
import { BooksLoggingService } from 'libs/books-logging/src/books-logging.service';
@Injectable()
export class BooksIamService {
  constructor(
    private readonly userService: UserService,
    private readonly booksJwtService: BooksJwtService,
    private readonly loggerService: BooksLoggingService,
  ) {}
  async signUp(signUpDto: SignUpDto) {
    const user = new User();
    user.email = signUpDto.email;
    user.password = await this.hash(signUpDto.password);
    user.role = signUpDto.role;
    await this.userService.save(user);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);
    this.loggerService.log('test2');
    if (!user) {
      throw new UnauthorizedException('User does not exists');
    }

    const isPasswordCorrect = await this.compare(
      user.password,
      signInDto.password,
    );
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Password does not match');
    }

    const accessToken = await this.booksJwtService.signToken(user.id, {
      email: user.email,
      role: user.role,
    });

    return { accessToken };
  }

  private async hash(data: string): Promise<string> {
    const salt = await genSalt();
    return hash(data, salt);
  }

  private async compare(cipher: string, data: string): Promise<boolean> {
    return compare(data, cipher);
  }
}
