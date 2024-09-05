import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersRepository } from '../data/users.repository';

@Injectable()
export class DeleteUserInteractor {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string): Promise<void> {
    try {
      await this.usersRepository.delete(id);
      return;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting user');
    }
  }
}
