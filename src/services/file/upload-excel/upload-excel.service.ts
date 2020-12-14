/**
 * @description 上传excel读取excel中的内容
 */
import * as path from 'path';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import xlsx from 'node-xlsx';
import { ConfigService, InjectConfig } from 'nestjs-config';
import { ObjectType } from '@src/types';

@Injectable()
export class UploadExcelService {
  constructor(@InjectConfig() private readonly configService: ConfigService) {}

  /**
   * @Description: 上传excel文件
   * @param {type}
   * @return:
   */
  public uploadFile(files: any): [ObjectType[], ObjectType[]] {
    return this.transformExcelData(files);
  }

  /**
   * @Description: 处理excel，将excel数据解析出来返回一个数组
   * @param {type}
   * @return:
   */
  private transformExcelData(files: any): [ObjectType[], ObjectType[]] {
    // 获取扩展名
    const extname = path.extname(files.originalname).toLocaleLowerCase();
    if (!['.xlsx', '.xls', '.xlt', '.xlsm'].includes(extname)) {
      throw new HttpException(
        `${files.originalname}文件格式不正确, 必须为['.xlsx', '.xls', '.xlt', '.xlsm']其中的一种`,
        HttpStatus.OK,
      );
    }
    const workSheets = xlsx.parse(files.buffer, { encoding: 'binary' });
    const firstTableData = workSheets[0].data;
    const titleList = firstTableData[0];
    const resultArray = [];
    // 循环行
    for (let row = 1; row < firstTableData.length; row++) {
      const obj1 = {};
      // 循环列
      for (let col = 0; col < firstTableData[row].length; col++) {
        obj1[titleList[col] as any] = firstTableData[row][col];
      }
      resultArray.push(obj1);
    }
    return [titleList, resultArray];
  }
}
