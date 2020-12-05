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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../../../guard/auth/auth.guard");
const admin_config_1 = require("../../../../config/admin.config");
const types_1 = require("../../../../types");
const account_service_1 = require("../../../../services/admin/system/account/account.service");
const current_user_1 = require("../../../../decorators/current.user");
const create_account_dto_1 = require("./dto/create.account.dto");
const update_password_dto_1 = require("./dto/update.password.dto");
const update_account_dto_1 = require("./dto/update.account.dto");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async createAccount(createAccountDto) {
        return await this.accountService.createAccount(createAccountDto);
    }
    async deleteAccountById(userId, id) {
        return await this.accountService.deleteAccountById(userId, id);
    }
    async modifyPassword(id, data) {
        return await this.accountService.modifyPassword(id, data);
    }
    async updateById(id, data) {
        return await this.accountService.updateById(id, data);
    }
    async findById(id) {
        return await this.accountService.findById(id);
    }
    async accountList(queryOption) {
        return await this.accountService.accountList(queryOption);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: '创建账号', description: '输入账号名及密码' }),
    swagger_1.ApiCreatedResponse({
        type: create_account_dto_1.CreateAccountDto,
        description: '创建账号DTO',
    }),
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "createAccount", null);
__decorate([
    swagger_1.ApiOperation({ summary: '删除账号', description: '输入账号及密码' }),
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, current_user_1.CurrentUser('id')),
    __param(1, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "deleteAccountById", null);
__decorate([
    swagger_1.ApiOperation({
        summary: '修改账号自己密码',
        description: '传递新老密码修改密码',
    }),
    common_1.Patch('modify_password'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, current_user_1.CurrentUser('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_password_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "modifyPassword", null);
__decorate([
    swagger_1.ApiOperation({ summary: '修改账号信息', description: '根据id修改账号信息' }),
    common_1.Patch(':id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_account_dto_1.UpdateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "updateById", null);
__decorate([
    swagger_1.ApiOperation({ summary: '获取账号信息', description: '根据id查询账号信息' }),
    common_1.Get(':id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findById", null);
__decorate([
    swagger_1.ApiOperation({ summary: '账号列表', description: '获取账号列表' }),
    common_1.Get(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "accountList", null);
AccountController = __decorate([
    swagger_1.ApiTags('账号模块'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Controller(`${admin_config_1.default.adminPath}/account`),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL3N5c3RlbS9hY2NvdW50L2FjY291bnQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0Fhd0I7QUFDeEIsNkNBS3lCO0FBQ3pCLGtFQUF1RDtBQUN2RCxrRUFBbUQ7QUFDbkQsNkNBQXdDO0FBQ3hDLCtGQUFvRjtBQUNwRixzRUFBMkQ7QUFDM0QsaUVBQWdHO0FBQ2hHLG1FQUFrRztBQUNsRyxpRUFBZ0c7QUFNaEcsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBNkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQVMvRCxLQUFLLENBQUMsYUFBYSxDQUNULGdCQUFrQztRQUUxQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBS0QsS0FBSyxDQUFDLGlCQUFpQixDQUNGLE1BQWMsRUFDQSxFQUFVO1FBRTNDLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBUUQsS0FBSyxDQUFDLGNBQWMsQ0FDQyxFQUFVLEVBQ3JCLElBQXVCO1FBRS9CLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQ21CLEVBQVUsRUFDbkMsSUFBc0I7UUFFOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBS0QsS0FBSyxDQUFDLFFBQVEsQ0FBa0MsRUFBVTtRQUN4RCxPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUtELEtBQUssQ0FBQyxXQUFXLENBQVUsV0FBdUI7UUFDaEQsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRixDQUFBO0FBcERDO0lBUEMsc0JBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQzFELDRCQUFrQixDQUFDO1FBQ2xCLElBQUksRUFBRSxxQ0FBZ0I7UUFDdEIsV0FBVyxFQUFFLFNBQVM7S0FDdkIsQ0FBQztJQUNELGFBQUksRUFBRTtJQUNOLGlCQUFRLENBQUMsbUJBQVUsQ0FBQyxPQUFPLENBQUM7SUFFMUIsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQW1CLHFDQUFnQjs7c0RBRzNDO0FBS0Q7SUFIQyxzQkFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDekQsZUFBTSxDQUFDLEtBQUssQ0FBQztJQUNiLGlCQUFRLENBQUMsbUJBQVUsQ0FBQyxPQUFPLENBQUM7SUFFMUIsV0FBQSwwQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLFdBQUEsY0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLHFCQUFZLEVBQUUsQ0FBQyxDQUFBOzs7OzBEQUdqQztBQVFEO0lBTkMsc0JBQVksQ0FBQztRQUNaLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFdBQVcsRUFBRSxZQUFZO0tBQzFCLENBQUM7SUFDRCxjQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDeEIsaUJBQVEsQ0FBQyxtQkFBVSxDQUFDLEVBQUUsQ0FBQztJQUVyQixXQUFBLDBCQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7NkNBQU8sdUNBQWlCOzt1REFHaEM7QUFLRDtJQUhDLHNCQUFZLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUM5RCxjQUFLLENBQUMsS0FBSyxDQUFDO0lBQ1osaUJBQVEsQ0FBQyxtQkFBVSxDQUFDLEVBQUUsQ0FBQztJQUVyQixXQUFBLGNBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxxQkFBWSxFQUFFLENBQUMsQ0FBQTtJQUMvQixXQUFBLGFBQUksRUFBRSxDQUFBOzs2Q0FBTyxxQ0FBZ0I7O21EQUcvQjtBQUtEO0lBSEMsc0JBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQzlELFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDVixpQkFBUSxDQUFDLG1CQUFVLENBQUMsRUFBRSxDQUFDO0lBQ1IsV0FBQSxjQUFLLENBQUMsSUFBSSxFQUFFLElBQUkscUJBQVksRUFBRSxDQUFDLENBQUE7Ozs7aURBRTlDO0FBS0Q7SUFIQyxzQkFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDeEQsWUFBRyxFQUFFO0lBQ0wsaUJBQVEsQ0FBQyxtQkFBVSxDQUFDLEVBQUUsQ0FBQztJQUNMLFdBQUEsY0FBSyxFQUFFLENBQUE7Ozs7b0RBRXpCO0FBN0RVLGlCQUFpQjtJQUo3QixpQkFBTyxDQUFDLE1BQU0sQ0FBQztJQUNmLHVCQUFhLEVBQUU7SUFDZixrQkFBUyxDQUFDLHNCQUFTLENBQUM7SUFDcEIsbUJBQVUsQ0FBQyxHQUFHLHNCQUFXLENBQUMsU0FBUyxVQUFVLENBQUM7cUNBRUEsZ0NBQWM7R0FEaEQsaUJBQWlCLENBOEQ3QjtBQTlEWSw4Q0FBaUIifQ==