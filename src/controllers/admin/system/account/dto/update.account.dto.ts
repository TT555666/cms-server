import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAccountDto {
  @ApiPropertyOptional({ required: false, description: '用户名' })
  @IsString({ message: '用户名必须为字符类型' })
  // Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.
  @IsOptional()
  readonly username?: string;

  @ApiPropertyOptional({
    required: false,
    description: '选中角色的id字符串,以英文,拼接',
  })
  @IsString({ message: '必须是字符类' })
  @IsOptional()
  readonly roles?: string;
}
