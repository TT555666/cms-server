import { LoginService } from '@src/services/admin/login/login.service';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import adminConfig from '@src/config/admin.config';
import { LoginDto } from '@src/controllers/admin/system/login/dto/login.dto';

@ApiTags('登陆模块')
@ApiBearerAuth()
@Controller(`${adminConfig.adminPath}/login`)
export class LoginController {
  constructor(private loginService: LoginService) {}

  @ApiOperation({
    summary: '登陆账号',
    description: '用户名可以是手机号码、邮箱、用户名',
  })
  @ApiCreatedResponse({
    type: LoginDto,
    description: '用户登陆DTO',
  })
  @Post()
  async adminLogin(@Body() loginDto: LoginDto): Promise<any> {
    return this.loginService.adminLogin(loginDto);
  }
}
