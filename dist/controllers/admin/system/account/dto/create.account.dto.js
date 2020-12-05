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
exports.CreateAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAccountDto {
}
__decorate([
    swagger_1.ApiProperty({ required: true, description: '用户名' }),
    class_validator_1.IsString({ message: '用户名必须为字符类型' }),
    class_validator_1.IsNotEmpty({ message: '用户名不能为空' }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true, description: '密码' }),
    class_validator_1.IsString({ message: '密码必须为字符串类型' }),
    class_validator_1.IsNotEmpty({ message: '密码不能为空' }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        required: false,
        description: '选中角色的id字符串,以英文,拼接',
    }),
    class_validator_1.IsString({ message: '必须是字符类' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "roles", void 0);
exports.CreateAccountDto = CreateAccountDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmFjY291bnQuZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL3N5c3RlbS9hY2NvdW50L2R0by9jcmVhdGUuYWNjb3VudC5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQW1FO0FBQ25FLHFEQUFtRTtBQUVuRSxNQUFhLGdCQUFnQjtDQWtCNUI7QUFkQztJQUhDLHFCQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNuRCwwQkFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ25DLDRCQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7O2tEQUNUO0FBSzFCO0lBSEMscUJBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDbkMsNEJBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7a0RBQ1I7QUFRMUI7SUFOQyw2QkFBbUIsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxtQkFBbUI7S0FDakMsQ0FBQztJQUNELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDL0IsNEJBQVUsRUFBRTs7K0NBQ1c7QUFqQjFCLDRDQWtCQyJ9