import { IsEmail, MinLength, MaxLength, IsEnum } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(16)
  password: string;
}
