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
exports.MenusController = void 0;
const common_1 = require("@nestjs/common");
const admin_config_1 = require("../../../../config/admin.config");
const auth_guard_1 = require("../../../../guard/auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const current_user_1 = require("../../../../decorators/current.user");
const types_1 = require("../../../../types");
const menus_service_1 = require("../../../../services/admin/system/menus/menus.service");
let MenusController = class MenusController {
    constructor(menusService) {
        this.menusService = menusService;
    }
    async menusList(userInfo) {
        return this.menusService.menusList(userInfo);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: '全部的菜单列表',
        description: '根据当前用户的授权获取对应的菜单',
    }),
    common_1.Get(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, current_user_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "menusList", null);
MenusController = __decorate([
    swagger_1.ApiTags('菜单模块'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller(`${admin_config_1.default.adminPath}/menus`),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [menus_service_1.MenusService])
], MenusController);
exports.MenusController = MenusController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zeXN0ZW0vbWVudXMvbWVudXMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FNd0I7QUFDeEIsa0VBQW1EO0FBQ25ELGtFQUF1RDtBQUN2RCw2Q0FBdUU7QUFDdkUsc0VBQTJEO0FBQzNELDZDQUF3QztBQUN4Qyx5RkFBOEU7QUFNOUUsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFRM0QsS0FBSyxDQUFDLFNBQVMsQ0FBZ0IsUUFBb0I7UUFDakQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQUhDO0lBTkMsc0JBQVksQ0FBQztRQUNaLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFdBQVcsRUFBRSxrQkFBa0I7S0FDaEMsQ0FBQztJQUNELFlBQUcsRUFBRTtJQUNMLGlCQUFRLENBQUMsbUJBQVUsQ0FBQyxFQUFFLENBQUM7SUFDUCxXQUFBLDBCQUFXLEVBQUUsQ0FBQTs7OztnREFFN0I7QUFYVSxlQUFlO0lBSjNCLGlCQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2YsdUJBQWEsRUFBRTtJQUNmLG1CQUFVLENBQUMsR0FBRyxzQkFBVyxDQUFDLFNBQVMsUUFBUSxDQUFDO0lBQzVDLGtCQUFTLENBQUMsc0JBQVMsQ0FBQztxQ0FFd0IsNEJBQVk7R0FENUMsZUFBZSxDQVkzQjtBQVpZLDBDQUFlIn0=