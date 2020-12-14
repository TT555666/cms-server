import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { WebsocketModule } from './websocket/websocket.module';
// import { TaskModule } from './task/task.module';

import { SeckillModule } from './seckill/seckill.module';
@Module({
  imports: [AdminModule, SharedModule, WebsocketModule, SeckillModule],
  exports: [AdminModule, SharedModule, WebsocketModule, SeckillModule],
  controllers: [],
})
export class ControllersModule {}
