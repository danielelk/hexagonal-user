import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from '../data/users.repository';
import { UpdateUserDto } from '../api/dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserInteractor {
  private readonly salt = 10;
  constructor(private readonly userRepository: UsersRepository) {}

  async execute(id: string, updateData: UpdateUserDto) {
    try {
      if (!(await this.userRepository.findOne(id))) {
        throw new NotFoundException(`User with id ${id} not found`);
      }

      if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, this.salt);
      }

      const user = await this.userRepository.update(id, updateData);

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Error updating the user');
    }
  }
}
