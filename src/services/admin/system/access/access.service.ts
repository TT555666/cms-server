import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessEntity } from '@src/entities/model/system/access.entity';
import { Repository } from 'typeorm';
import { CreateAccessDto } from '@src/controllers/admin/system/access/dto/create.access.dto';

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(AccessEntity)
    private readonly accessRepository: Repository<AccessEntity>,
  ) {}
  /**
   *
   * @param createAccessDto
   * @description 创建资源
   */
  async createAccess(createAccessDto: CreateAccessDto): Promise<any> {
    try {
      const { moduleName, actionName } = createAccessDto;
      if (moduleName) {
        const result = await this.accessRepository.findOne({
          where: { moduleName },
        });
        if (result) {
          throw new HttpException(
            `你修改的moduleName:${moduleName},数据库已经存在,不能重名`,
            HttpStatus.OK,
          );
        }
      }
      if (actionName) {
        const result = await this.accessRepository.findOne({
          where: { actionName, moduleName },
        });
        if (result) {
          throw new HttpException(
            `你修改的actionName:${actionName},数据库已经存在,不能重名`,
            HttpStatus.OK,
          );
        }
      }
      const access = await this.accessRepository.create(createAccessDto);
      return await this.accessRepository.save(access);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.OK);
    }
  }
}
