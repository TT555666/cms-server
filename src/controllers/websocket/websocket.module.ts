import { Module } from '@nestjs/common';

import { ServicesModule } from '@src/services/services.module';
import { WebsocketController } from './websocket.controller';
@Module({
  imports: [ServicesModule],
  controllers: [WebsocketController],
})
export class WebsocketModule {}
