import { Module } from '@nestjs/common';
import { FileController } from './file/file.controller';
import { ServicesModule } from '@src/services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [FileController],
})
export class SharedModule {}
