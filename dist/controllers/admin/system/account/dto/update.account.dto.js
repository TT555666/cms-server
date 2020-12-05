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
exports.UpdateAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateAccountDto {
}
__decorate([
    swagger_1.ApiPropertyOptional({ required: false, description: '用户名' }),
    class_validator_1.IsString({ message: '用户名必须为字符类型' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        required: false,
        description: '选中角色的id字符串,以英文,拼接',
    }),
    class_validator_1.IsString({ message: '必须是字符类' }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "roles", void 0);
exports.UpdateAccountDto = UpdateAccountDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmFjY291bnQuZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL3N5c3RlbS9hY2NvdW50L2R0by91cGRhdGUuYWNjb3VudC5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNEO0FBQ3RELHFEQUF1RDtBQUV2RCxNQUFhLGdCQUFnQjtDQWM1QjtBQVRDO0lBSkMsNkJBQW1CLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUM1RCwwQkFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO0lBRW5DLDRCQUFVLEVBQUU7O2tEQUNjO0FBUTNCO0lBTkMsNkJBQW1CLENBQUM7UUFDbkIsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsbUJBQW1CO0tBQ2pDLENBQUM7SUFDRCwwQkFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQy9CLDRCQUFVLEVBQUU7OytDQUNXO0FBYjFCLDRDQWNDIn0=