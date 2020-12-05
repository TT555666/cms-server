import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import NodeAuth from 'node-auth0';

import * as uuidv4 from 'uuid';
import { isUUID, isEmail, isInt, isMobilePhone } from 'class-validator';

@Injectable()
export class ToolsService {
  private nodeAuth: NodeAuth;
  constructor() {
    this.nodeAuth = new NodeAuth();
  }
  /**
   * @Description: 生成uuid的方法
   * @param {type}
   * @return:
   */
  public get uuid(): string {
    return uuidv4.v4();
  }

  /**
   * @Description: 密码加密的方法
   * @param {type}
   * @return:
   */
  makePassword(password: string): string {
    return this.nodeAuth.makePassword(password);
  }

  /**
   * @Description: 校验密码加密
   * @param {type}
   * @return:
   */
  checkPassword(password: string, sqlPassword: string): boolean {
    return this.nodeAuth.checkPassword(password, sqlPassword);
  }

  /**
   * @Description: 判断是否为uuid
   * @param {type}
   * @return:
   */
  public isUUID(id: string): boolean {
    return isUUID(id);
  }

  /**
   * @Description: 判断是否为id
   * @param {type}
   * @return:
   */
  public isInt(id: string): boolean {
    return isInt(Number(id));
  }

  public isEmail(str: string): boolean {
    return isEmail(str);
  }

  public isMobilePhone(mobile: string, nation: any = 'zh-CN'): boolean {
    return isMobilePhone(mobile, nation);
  }

  /**
   * @Description: 校验分页
   * @param {type}
   * @return:
   */
  public checkPage(pageSize: number, pageNumber: number): void {
    if (!isInt(Number(pageSize)) || !isInt(Number(pageNumber))) {
      throw new HttpException(
        `传递的pageSize:${pageSize},pageNumber:${pageNumber}其中一个不是整数`,
        HttpStatus.OK,
      );
    }
  }

  /**
   * @Description: 根据id查询单条数据
   * @param {type}
   * @return:
   */
  public async findByIdOrUuid(id: string, repository: any) {
    if (this.isUUID(id)) {
      return await repository.findOne({ uuid: id });
    } else if (this.isInt(id)) {
      return await repository.findOne({ id: Number(id) });
    } else {
      return new HttpException(
        `你传递的参数错误:${id}不是uuid或者id的一种`,
        HttpStatus.OK,
      );
    }
  }
}
