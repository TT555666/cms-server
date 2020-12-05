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
exports.UpdatePasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdatePasswordDto {
}
__decorate([
    swagger_1.ApiProperty({ required: true, description: '新密码' }),
    class_validator_1.IsString({ message: '新密码必须为字符串类型' }),
    class_validator_1.IsNotEmpty({ message: '新密码不能为空' }),
    __metadata("design:type", String)
], UpdatePasswordDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true, description: '确认密码' }),
    class_validator_1.IsString({ message: '确认密码必须为字符串类型' }),
    class_validator_1.IsNotEmpty({ message: '确认密码不能为空' }),
    __metadata("design:type", String)
], UpdatePasswordDto.prototype, "checkPassword", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true, description: '老密码' }),
    class_validator_1.IsString({ message: '老密码必须为字符串类型' }),
    class_validator_1.IsNotEmpty({ message: '老密码不能为空' }),
    __metadata("design:type", String)
], UpdatePasswordDto.prototype, "oldPassword", void 0);
exports.UpdatePasswordDto = UpdatePasswordDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnBhc3N3b3JkLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zeXN0ZW0vYWNjb3VudC9kdG8vdXBkYXRlLnBhc3N3b3JkLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBOEM7QUFDOUMscURBQXVEO0FBRXZELE1BQWEsaUJBQWlCO0NBZTdCO0FBWEM7SUFIQyxxQkFBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbkQsMEJBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUNwQyw0QkFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDOzttREFDVDtBQUsxQjtJQUhDLHFCQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNwRCwwQkFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLDRCQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7O3dEQUNMO0FBSy9CO0lBSEMscUJBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ25ELDBCQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDcEMsNEJBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQzs7c0RBQ047QUFkL0IsOENBZUMifQ==