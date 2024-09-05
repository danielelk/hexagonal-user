import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from '../data/users.repository';
import { UserEntity } from '../domain/user.entity';

@Injectable()
export class GetUserInteractor {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string): Promise<UserEntity> {
    try {
      const user = await this.usersRepository.findOne(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Error finding the user');
    }
  }
}
