import { Role } from '../enums/roles.enums';

export interface BooksUserData {
  sub: number;

  email: string;

  role: Role;
}
