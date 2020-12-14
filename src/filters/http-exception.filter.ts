import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import { formatDate } from '../utils';
// 参考 https://docs.nestjs.cn/7/exceptionfilters?id=%e6%8d%95%e8%8e%b7%e5%bc%82%e5%b8%b8
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = exception.message;
    let code = 1;
    try {
      const messageObj = JSON.parse(exception.message);
      message = messageObj.message;
      code = messageObj.code;
    } catch (e) {}
    Logger.log(exception, '错误提示');
    const errorResponse = {
      status,
      message,
      code, // 自定义code
      path: request.url, // 错误的url地址
      method: request.method, // 请求方式
      timestamp: new Date().toLocaleDateString(), // 错误的时间
    };
    // 打印日志
    Logger.error(
      `【${formatDate(Date.now())}】${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'HttpExceptionFilter',
    );
    // 设置返回的状态码、请求头、发送错误信息
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
