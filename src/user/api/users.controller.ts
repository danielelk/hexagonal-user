import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserInteractor } from '../logic/create-user.interactor';
import { DeleteUserInteractor } from '../logic/delete-user.interactor';
import { GetAllUsersInteractor } from '../logic/get-all-users.interactor';
import { GetUserInteractor } from '../logic/get-user.interactor';
import { UpdateUserInteractor } from '../logic/update-user.interactor';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserInteractor: CreateUserInteractor,
    private readonly deleteUserInteractor: DeleteUserInteractor,
    private readonly getAllUsersInteractor: GetAllUsersInteractor,
    private readonly getUserInteractor: GetUserInteractor,
    private readonly updateUserInteractor: UpdateUserInteractor,
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getUserInteractor.execute(id);
  }

  @Get()
  async findAll() {
    return this.getAllUsersInteractor.execute();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserInteractor.execute(createUserDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserInteractor.execute(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteUserInteractor.execute(id);
  }
}
