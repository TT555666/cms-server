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
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginDto {
}
__decorate([
    swagger_1.ApiProperty({ required: true, description: '用户名' }),
    class_validator_1.IsString({ message: '用户名必须为字符类型' }),
    class_validator_1.IsNotEmpty({ message: '姓名不能为空' }),
    __metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true, description: '用户名' }),
    class_validator_1.IsString({ message: '密码必须为字符类型' }),
    class_validator_1.IsNotEmpty({ message: '密码不能为空' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL3N5c3RlbS9sb2dpbi9kdG8vbG9naW4uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE4QztBQUM5QyxxREFBdUQ7QUFFdkQsTUFBYSxRQUFRO0NBVXBCO0FBTkM7SUFIQyxxQkFBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbkQsMEJBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUNuQyw0QkFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDOzswQ0FDUjtBQUsxQjtJQUhDLHFCQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNuRCwwQkFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLDRCQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7OzBDQUNSO0FBVDVCLDRCQVVDIn0=