import {
  Controller,
  HttpCode,
  Post,
  UseGuards,
  HttpStatus,
  Body,
} from '@nestjs/common';
import adminConfig from '@src/config/admin.config';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

import { AccessService } from '@src/services/admin/system/access/access.service';
import { AuthGuard } from '@src/guard/auth/auth.guard';
import { CreateAccessDto } from './dto/create.access.dto';

@ApiTags('资源模块')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller(`${adminConfig.adminPath}/access`)
export class AccessControl {
  constructor(private readonly accessService: AccessService) {}

  @ApiOperation({ summary: '创建资源', description: '创建资源' })
  @Post()
  @HttpCode(HttpStatus.OK)
  async createAccess(@Body() createAccessDto: CreateAccessDto): Promise<any> {
    return await this.accessService.createAccess(createAccessDto);
  }
}
