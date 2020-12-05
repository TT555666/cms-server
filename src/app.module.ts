import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor';

import { ControllersModule } from './controllers/controllers.module';
// import { ValidationPipe } from './pipe/validation.pipe';

@Module({
  imports: [
    //配置加载配置文件.config
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      modifyConfigName: (name) => name.replace('.config', ''),
    }),
    //连接mysql 参考https://docs.nestjs.cn/7/techniques?id=%e6%95%b0%e6%8d%ae%e5%ba%93
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        type: config.get('database.type'),
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.database'),
        // 实体和数据库一一对应
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: config.get('database.logging'),
        synchronize: true,
        timezone: '+08:00', // 东八区
      }),
      // 注入 其他模块注入这个
      inject: [ConfigService],
    }),
    ControllersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    // 全局使用管道(数据校验)
    {
      provide: APP_PIPE,
      // ValidationPipe 需要同时安装 class-validator 和 class-transformer 包
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
