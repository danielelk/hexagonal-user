import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersRepository } from '../data/users.repository';
import { CreateUserDto } from '../api/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../domain/user.entity';

@Injectable()
export class CreateUserInteractor {
  private readonly salt = 10;
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userData: CreateUserDto): Promise<UserEntity> {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, this.salt);
      userData.password = hashedPassword;

      const user = await this.usersRepository.create(userData);
      if (!user) {
        console.log('test');
        throw new InternalServerErrorException('Error creating user');
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
