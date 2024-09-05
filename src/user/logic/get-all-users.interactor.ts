import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersRepository } from '../data/users.repository';
import { UserEntity } from '../domain/user.entity';

@Injectable()
export class GetAllUsersInteractor {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(): Promise<UserEntity[]> {
    try {
      const users = await this.usersRepository.findAll();
      return users;
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving users');
    }
  }
}
