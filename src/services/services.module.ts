import { Module } from '@nestjs/common';
import { ToolsService } from './tools/tools.service';
import { EntityModule } from '@src/entities/entities.module';
// import { RoleService } from './admin/system/role/role.service';
// import { AccessService } from './admin/system/access/access.service';
import { LoginService } from './admin/login/login.service';
// import { RoleAccessService } from './admin/system/role-access/role-access.service';
import { MenusService } from './admin/system/menus/menus.service';
// import { DictConfigService } from './admin/system/dict-config/dict-config.service';
import { AccountService } from './admin/system/account/account.service';
// import { AccountRoleService } from './admin/system/account-role/account-role.service';
// import { InitDbService } from './init-db/init-db.service';
import { UploadImgService } from '@src/services/file/upload-img/upload-img.service';
import { UploadExcelService } from './file/upload-excel/upload-excel.service';
import { WebsocketService } from '@src/services/websocket/websocket.service';

import { BullModule } from '@nestjs/bull';
// import { TaskServices } from '@src/services/task/task.services';
// import { MongooseModule } from '@nestjs/mongoose';
// import {
//   EmailConfig,
//   EmailConfigSchema,
// } from '@src/entities/mongo/task/emailConfig.entity.mongo';
// import { Task, TaskSchema } from '@src/entities/mongo/task/task.entity.mongo';
const serviceList = [
  AccountService,
  WebsocketService,
  UploadImgService,
  UploadExcelService,
  ToolsService,
  LoginService,
  MenusService,
  // TaskServices,
];
@Module({
  imports: [
    EntityModule,
    BullModule.registerQueue({ name: 'email' }, { name: 'message' }),
    // MongooseModule.forFeature([
    //   { name: EmailConfig.name, schema: EmailConfigSchema },
    //   { name: Task.name, schema: TaskSchema },
    // ]),
  ],

  providers: [...serviceList],
  exports: [...serviceList],
})
export class ServicesModule {}
