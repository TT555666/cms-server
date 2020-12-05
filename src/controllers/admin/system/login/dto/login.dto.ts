import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true, description: '用户名' })
  @IsString({ message: '用户名必须为字符类型' })
  @IsNotEmpty({ message: '姓名不能为空' })
  readonly username: string;

  @ApiProperty({ required: true, description: '用户名' })
  @IsString({ message: '密码必须为字符类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}