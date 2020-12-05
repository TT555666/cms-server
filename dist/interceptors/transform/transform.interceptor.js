"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../../utils");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.map((data) => {
            if (utils_1.isObject(data) && data.isUpload) {
                return {
                    link: data.result.url,
                    code: 0,
                    message: '请求成功',
                };
            }
            else {
                return {
                    result: class_transformer_1.classToPlain(data),
                    code: 0,
                    message: '请求成功',
                };
            }
        }));
    }
};
TransformInterceptor = __decorate([
    common_1.Injectable()
], TransformInterceptor);
exports.TransformInterceptor = TransformInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ludGVyY2VwdG9ycy90cmFuc2Zvcm0vdHJhbnNmb3JtLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUt3QjtBQUV4Qiw4Q0FBcUM7QUFDckMseURBQWlEO0FBQ2pELHVDQUF1QztBQUd2QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUVwRCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQ3ZCLGVBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBRWhCLElBQUksZ0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNuQyxPQUFPO29CQUNMLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7b0JBQ3JCLElBQUksRUFBRSxDQUFDO29CQUNQLE9BQU8sRUFBRSxNQUFNO2lCQUNoQixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTztvQkFFTCxNQUFNLEVBQUUsZ0NBQVksQ0FBQyxJQUFJLENBQUM7b0JBQzFCLElBQUksRUFBRSxDQUFDO29CQUNQLE9BQU8sRUFBRSxNQUFNO2lCQUNoQixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUF2Qlksb0JBQW9CO0lBRGhDLG1CQUFVLEVBQUU7R0FDQSxvQkFBb0IsQ0F1QmhDO0FBdkJZLG9EQUFvQiJ9