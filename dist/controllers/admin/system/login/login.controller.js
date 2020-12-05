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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const login_service_1 = require("../../../../services/admin/login/login.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const admin_config_1 = require("../../../../config/admin.config");
const login_dto_1 = require("./dto/login.dto");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async adminLogin(loginDto) {
        return this.loginService.adminLogin(loginDto);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: '登陆账号',
        description: '用户名可以是手机号码、邮箱、用户名',
    }),
    swagger_1.ApiCreatedResponse({
        type: login_dto_1.LoginDto,
        description: '用户登陆DTO',
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "adminLogin", null);
LoginController = __decorate([
    swagger_1.ApiTags('登陆模块'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller(`${admin_config_1.default.adminPath}/login`),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zeXN0ZW0vbG9naW4vbG9naW4uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBdUU7QUFDdkUsNkNBS3lCO0FBQ3pCLDJDQUF3RDtBQUN4RCxrRUFBbUQ7QUFDbkQsK0NBQTZFO0FBSzdFLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBV2xELEtBQUssQ0FBQyxVQUFVLENBQVMsUUFBa0I7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0YsQ0FBQTtBQUhDO0lBVEMsc0JBQVksQ0FBQztRQUNaLE9BQU8sRUFBRSxNQUFNO1FBQ2YsV0FBVyxFQUFFLG1CQUFtQjtLQUNqQyxDQUFDO0lBQ0QsNEJBQWtCLENBQUM7UUFDbEIsSUFBSSxFQUFFLG9CQUFRO1FBQ2QsV0FBVyxFQUFFLFNBQVM7S0FDdkIsQ0FBQztJQUNELGFBQUksRUFBRTtJQUNXLFdBQUEsYUFBSSxFQUFFLENBQUE7O3FDQUFXLG9CQUFROztpREFFMUM7QUFkVSxlQUFlO0lBSDNCLGlCQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2YsdUJBQWEsRUFBRTtJQUNmLG1CQUFVLENBQUMsR0FBRyxzQkFBVyxDQUFDLFNBQVMsUUFBUSxDQUFDO3FDQUVULDRCQUFZO0dBRG5DLGVBQWUsQ0FlM0I7QUFmWSwwQ0FBZSJ9