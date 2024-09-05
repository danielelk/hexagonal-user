import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from './domain/user.entity';
import { UsersController } from './api/users.controller';
import { UsersRepository } from './data/users.repository';
import { CreateUserInteractor } from './logic/create-user.interactor';
import { UpdateUserInteractor } from './logic/update-user.interactor';
import { DeleteUserInteractor } from './logic/delete-user.interactor';
import { GetAllUsersInteractor } from './logic/get-all-users.interactor';
import { GetUserInteractor } from './logic/get-user.interactor';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UsersRepository,
    CreateUserInteractor,
    UpdateUserInteractor,
    DeleteUserInteractor,
    GetAllUsersInteractor,
    GetUserInteractor,
  ],
})
export class UserModule {}
