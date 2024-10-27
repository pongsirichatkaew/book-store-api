import { IsEmail, IsEnum, MaxLength, MinLength } from 'class-validator';
import { Role } from 'libs/books-jwt/enums/roles.enums';

export class SignUpDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(16)
  password: string;

  @IsEnum(Role)
  role: Role;
}
