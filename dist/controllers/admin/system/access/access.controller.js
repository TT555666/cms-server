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
exports.AccessControl = void 0;
const common_1 = require("@nestjs/common");
const admin_config_1 = require("../../../../config/admin.config");
const swagger_1 = require("@nestjs/swagger");
const access_service_1 = require("../../../../services/admin/system/access/access.service");
const auth_guard_1 = require("../../../../guard/auth/auth.guard");
const create_access_dto_1 = require("./dto/create.access.dto");
let AccessControl = class AccessControl {
    constructor(accessService) {
        this.accessService = accessService;
    }
    async createAccess(createAccessDto) {
        return await this.accessService.createAccess(createAccessDto);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: '创建资源', description: '创建资源' }),
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_access_dto_1.CreateAccessDto]),
    __metadata("design:returntype", Promise)
], AccessControl.prototype, "createAccess", null);
AccessControl = __decorate([
    swagger_1.ApiTags('资源模块'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Controller(`${admin_config_1.default.adminPath}/access`),
    __metadata("design:paramtypes", [access_service_1.AccessService])
], AccessControl);
exports.AccessControl = AccessControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vc3lzdGVtL2FjY2Vzcy9hY2Nlc3MuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FPd0I7QUFDeEIsa0VBQW1EO0FBQ25ELDZDQUF1RTtBQUV2RSw0RkFBaUY7QUFDakYsa0VBQXVEO0FBQ3ZELCtEQUEwRDtBQU0xRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBQ3hCLFlBQTZCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUs3RCxLQUFLLENBQUMsWUFBWSxDQUFTLGVBQWdDO1FBQ3pELE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0YsQ0FBQTtBQUhDO0lBSEMsc0JBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3RELGFBQUksRUFBRTtJQUNOLGlCQUFRLENBQUMsbUJBQVUsQ0FBQyxFQUFFLENBQUM7SUFDSixXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBa0IsbUNBQWU7O2lEQUUxRDtBQVJVLGFBQWE7SUFKekIsaUJBQU8sQ0FBQyxNQUFNLENBQUM7SUFDZix1QkFBYSxFQUFFO0lBQ2Ysa0JBQVMsQ0FBQyxzQkFBUyxDQUFDO0lBQ3BCLG1CQUFVLENBQUMsR0FBRyxzQkFBVyxDQUFDLFNBQVMsU0FBUyxDQUFDO3FDQUVBLDhCQUFhO0dBRDlDLGFBQWEsQ0FTekI7QUFUWSxzQ0FBYSJ9