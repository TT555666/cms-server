import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as path from 'path';
import * as rateLimit from 'express-rate-limit';
import adminConfig from './config/admin.config';
import * as helmet from 'helmet';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptors/transform/transform.interceptor';
import * as requestIp from 'request-ip';
import { Logger } from '@nestjs/common';

const PREFIX = process.env.PREFIX || '';
const PORT = process.env.PORT || 7002;
async function bootstrap() {
  // 指定了范型其实就是Nest的平台，默认使用的是express的平台，因为静态资源涉及平台的选择所以必须指定了
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 启用 CORS
  app.enableCors();
  app.setGlobalPrefix(PREFIX);
  // 配置swagger api文档信息
  const options = new DocumentBuilder()
    .setTitle('nest api文档')
    .setDescription('nest api接口文档')
    .setBasePath(PREFIX)
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${PREFIX}/docs`, app, document);
  // 访问频率限制
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 500, //限制15分钟最多访问500次
    }),
  );
  //配置静态资源目录
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    prefix: adminConfig.staticPrefixPath,
  });
  // Web漏洞的 通过设置各种header来为express应用提供安全保护
  app.use(helmet());
  // 全局注册错误的过滤器(错误异常)
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器(成功返回格式)
  app.useGlobalInterceptors(new TransformInterceptor());
  // 获取ip地址
  app.use(requestIp.mw());
  await app.listen(PORT, () => {
    Logger.log(`服务器启动成功请访问:http://localhost:${PORT}/${PREFIX}`);
  });
}
bootstrap();
