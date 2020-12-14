/**
 * @description 自定义装饰器用来获取当前用户
 */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('request', request);
    if (data && request.user) {
      return request.user[data];
    } else {
      return request.user;
    }
  },
);
