import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessEntity } from './model/system/access.entity';

import { AccountEntity } from './model/system/account.entity';

import { WebsocketEntity } from '@src/entities/model/websocket/websocket.entity';

const entityList = [AccountEntity, WebsocketEntity, AccessEntity];

@Module({
  imports: [TypeOrmModule.forFeature(entityList)],

  exports: [TypeOrmModule.forFeature(entityList)],
})
export class EntityModule {}
