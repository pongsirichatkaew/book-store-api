import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DUPLICATE_UNIQUE_KEY } from '../books-database.constants';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async save(user: User) {
    try {
      await this.userRepository.save(user);
    } catch (error) {
      if (error.code === DUPLICATE_UNIQUE_KEY) {
        throw new ConflictException();
      }
      throw error;
    }
  }
}
