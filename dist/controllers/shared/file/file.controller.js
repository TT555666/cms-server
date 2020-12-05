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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_config_1 = require("../../../config/admin.config");
const platform_express_1 = require("@nestjs/platform-express");
const nestjs_config_1 = require("nestjs-config");
const auth_guard_1 = require("../../../guard/auth/auth.guard");
const upload_img_service_1 = require("../../../services/file/upload-img/upload-img.service");
let FileController = class FileController {
    constructor(configService, uploadImgService) {
        this.configService = configService;
        this.uploadImgService = uploadImgService;
    }
    async uploadImage(file, category = '') {
        const supportImgTypes = this.configService.get('admin.supportImgTypes');
        const result = await this.uploadImgService.uploadFile({
            files: file,
            category,
            typeList: supportImgTypes,
            isOSS: true,
        });
        return {
            result,
            isUpload: true,
        };
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: '上传图片',
        description: '上传图片的接口, file:上传的图片, category:分类(可选参数)',
    }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.Post('upload_image'),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadImage", null);
FileController = __decorate([
    swagger_1.ApiTags('上传文件'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Controller(`${admin_config_1.default.adminPath}/file`),
    __param(0, nestjs_config_1.InjectConfig()),
    __metadata("design:paramtypes", [nestjs_config_1.ConfigService,
        upload_img_service_1.UploadImgService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3NoYXJlZC9maWxlL2ZpbGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FTd0I7QUFDeEIsNkNBQXVFO0FBQ3ZFLCtEQUFtRDtBQUNuRCwrREFBMkQ7QUFDM0QsaURBQTREO0FBRTVELCtEQUF1RDtBQUN2RCw2RkFBb0Y7QUFNcEYsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixZQUNtQyxhQUE0QixFQUM1QyxnQkFBa0M7UUFEbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNsRCxDQUFDO0lBU0osS0FBSyxDQUFDLFdBQVcsQ0FDQyxJQUFTLEVBQ1AsV0FBVyxFQUFFO1FBRS9CLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDeEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1lBQ3BELEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUTtZQUNSLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLE1BQU07WUFDTixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWhCQztJQVBDLHNCQUFZLENBQUM7UUFDWixPQUFPLEVBQUUsTUFBTTtRQUNmLFdBQVcsRUFBRSx3Q0FBd0M7S0FDdEQsQ0FBQztJQUNELHdCQUFlLENBQUMsa0NBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxpQkFBUSxDQUFDLG1CQUFVLENBQUMsT0FBTyxDQUFDO0lBQzVCLGFBQUksQ0FBQyxjQUFjLENBQUM7SUFFbEIsV0FBQSxxQkFBWSxFQUFFLENBQUE7SUFDZCxXQUFBLGFBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTs7OztpREFhbEI7QUE1QlUsY0FBYztJQUoxQixpQkFBTyxDQUFDLE1BQU0sQ0FBQztJQUNmLHVCQUFhLEVBQUU7SUFDZixrQkFBUyxDQUFDLHNCQUFTLENBQUM7SUFDcEIsbUJBQVUsQ0FBQyxHQUFHLHNCQUFXLENBQUMsU0FBUyxPQUFPLENBQUM7SUFHdkMsV0FBQSw0QkFBWSxFQUFFLENBQUE7cUNBQWlDLDZCQUFhO1FBQzFCLHFDQUFnQjtHQUgxQyxjQUFjLENBNkIxQjtBQTdCWSx3Q0FBYyJ9