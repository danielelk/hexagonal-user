import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from '../domain/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(UserEntity.name) private readonly userModel: Model<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.userModel.findById(id).exec();
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return this.userModel.create(user);
  }

  async update(id: string, user: Partial<UserEntity>): Promise<UserEntity> {
    return this.userModel.findByIdAndUpdate(id, user, {
      runValidators: true,
      new: true,
    });
  }

  async delete(id: string): Promise<void> {
    return this.userModel.findByIdAndDelete(id);
  }
}
