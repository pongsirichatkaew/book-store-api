import { SetMetadata } from '@nestjs/common';
import { ROLE_KEY } from '../books-jwt.constants';
import { Role } from '../enums/roles.enums';

export const Roles = (...roles: Role[]) => SetMetadata(ROLE_KEY, roles);
