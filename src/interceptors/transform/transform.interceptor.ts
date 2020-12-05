import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';
import { isObject } from '../../utils';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // handle() 返回一个RxJS Observable
    return next.handle().pipe(
      map((data: any) => {
        // 专门处理下上传图片的(文本编辑器使用)
        if (isObject(data) && data.isUpload) {
          return {
            link: data.result.url,
            code: 0,
            message: '请求成功',
          };
        } else {
          return {
            //   参考https://docs.nestjs.cn/7/pipes?id=%e7%b1%bb%e9%aa%8c%e8%af%81%e5%99%a8
            result: classToPlain(data),
            code: 0,
            message: '请求成功',
          };
        }
      }),
    );
  }
}
