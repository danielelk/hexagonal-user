import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsOptional()
  @IsString({ message: 'Firstname must be a string' })
  @Length(3, 25, {
    message: 'Firstname must be between 3 and 25 characters long',
  })
  readonly firstname?: string;

  @IsOptional()
  @IsString({ message: 'Lastname must be a string' })
  @Length(3, 25, {
    message: 'Lastname must be between 3 and 25 characters long',
  })
  readonly lastname?: string;
}
