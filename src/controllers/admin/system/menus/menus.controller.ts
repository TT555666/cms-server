import {
  Controller,
  Get,
  HttpCode,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import adminConfig from '@src/config/admin.config';
import { AuthGuard } from '@src/guard/auth/auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CurrentUser } from '@src/decorators/current.user';
import { ObjectType } from '@src/types';
import { MenusService } from '@src/services/admin/system/menus/menus.service';

@ApiTags('菜单模块')
@ApiBearerAuth()
@Controller(`${adminConfig.adminPath}/menus`)
@UseGuards(AuthGuard)
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @ApiOperation({
    summary: '全部的菜单列表',
    description: '根据当前用户的授权获取对应的菜单',
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async menusList(@CurrentUser() userInfo: ObjectType): Promise<any> {
    return this.menusService.menusList(userInfo);
  }
}
