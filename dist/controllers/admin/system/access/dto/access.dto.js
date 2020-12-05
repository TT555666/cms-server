"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AccessDto {
}
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '模块名称' }),
    class_validator_1.MaxLength(50, { message: '长度最大为50' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "moduleName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '操作名称' }),
    class_validator_1.IsString({ message: '操作名称必须为字符串' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "actionName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '图标名称' }),
    class_validator_1.IsString({ message: '图标必须为字符串' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "icon", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: 'url地址' }),
    class_validator_1.IsString({ message: 'url地址必须为字符串' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "url", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '请求方式' }),
    class_validator_1.IsString({ message: 'method请求方式必须是字符类型' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "method", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '父节点模块id' }),
    class_validator_1.IsInt({ message: '模块父节点必须是数字' }),
    class_transformer_1.Transform((value) => parseInt(value, 10)),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], AccessDto.prototype, "moduleId", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '平台名称' }),
    class_validator_1.IsString({ message: '平台必须为字符串类型' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "platform", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '排序' }),
    class_validator_1.IsInt({ message: '排序必须是数字' }),
    class_transformer_1.Transform((value) => parseInt(value, 10)),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], AccessDto.prototype, "sort", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '描素' }),
    class_validator_1.IsString({ message: '描素必须是字符类型' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], AccessDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        required: false,
        description: '状态',
        enum: [0, 1],
    }),
    class_validator_1.IsEnum({ 禁用: 0, 当前可用: 1 }, { message: '必须是0或者1' }),
    class_validator_1.IsNumber(),
    class_transformer_1.Transform((value) => parseInt(value, 10)),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], AccessDto.prototype, "status", void 0);
exports.AccessDto = AccessDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zeXN0ZW0vYWNjZXNzL2R0by9hY2Nlc3MuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQU95QjtBQUN6Qiw2Q0FBc0Q7QUFDdEQseURBQThDO0FBRTlDLE1BQWEsU0FBUztDQTJEckI7QUF2REM7SUFIQyw2QkFBbUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzdELDJCQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ3JDLDRCQUFVLEVBQUU7OzZDQUNnQjtBQUs3QjtJQUhDLDZCQUFtQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDN0QsMEJBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNuQyw0QkFBVSxFQUFFOzs2Q0FDZ0I7QUFLN0I7SUFIQyw2QkFBbUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzdELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDakMsNEJBQVUsRUFBRTs7dUNBQ1U7QUFNdkI7SUFKQyw2QkFBbUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBRTlELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDcEMsNEJBQVUsRUFBRTs7c0NBQ1M7QUFLdEI7SUFIQyw2QkFBbUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzdELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztJQUMxQyw0QkFBVSxFQUFFOzt5Q0FDWTtBQU16QjtJQUpDLDZCQUFtQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDaEUsdUJBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNoQyw2QkFBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLDRCQUFVLEVBQUU7OzJDQUNjO0FBSzNCO0lBSEMsNkJBQW1CLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUM3RCwwQkFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ25DLDRCQUFVLEVBQUU7OzJDQUNjO0FBTTNCO0lBSkMsNkJBQW1CLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMzRCx1QkFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzdCLDZCQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsNEJBQVUsRUFBRTs7dUNBQ1U7QUFLdkI7SUFIQyw2QkFBbUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDbEMsNEJBQVUsRUFBRTs7OENBQ2lCO0FBVzlCO0lBVEMsNkJBQW1CLENBQUM7UUFDbkIsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsSUFBSTtRQUNqQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2IsQ0FBQztJQUNELHdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUNsRCwwQkFBUSxFQUFFO0lBQ1YsNkJBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6Qyw0QkFBVSxFQUFFOzt5Q0FDWTtBQTFEM0IsOEJBMkRDIn0=