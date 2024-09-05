import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserEntity {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ minlength: 3, maxlength: 25 })
  firstname?: string;

  @Prop({ minlength: 3, maxlength: 25 })
  lastname?: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
