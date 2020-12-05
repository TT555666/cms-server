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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const login_dto_1 = require("../../../controllers/admin/system/login/dto/login.dto");
const account_entity_1 = require("../../../entities/model/system/account.entity");
const typeorm_2 = require("typeorm");
const tools_service_1 = require("../../tools/tools.service");
let LoginService = class LoginService {
    constructor(userRepository, toolsService) {
        this.userRepository = userRepository;
        this.toolsService = toolsService;
    }
    async adminLogin(loginDto) {
        try {
            const { username, password } = loginDto;
            const user = await this.userRepository.findOne({
                where: { username, isDel: 0 },
            });
            if (user && this.toolsService.checkPassword(password, user.password)) {
                return user.toResponseObject();
            }
            else {
                throw new common_1.HttpException('请检查你的用户名与密码', common_1.HttpStatus.OK);
            }
        }
        catch (error) {
            common_1.Logger.log(error, 'userServiceLoginn');
            throw new common_1.HttpException('请检查你的用户名与密码', common_1.HttpStatus.OK);
        }
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(account_entity_1.AccountEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        tools_service_1.ToolsService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hZG1pbi9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErRTtBQUMvRSw2Q0FBbUQ7QUFDbkQscUZBQTZFO0FBQzdFLGtGQUEwRTtBQUMxRSxxQ0FBcUM7QUFDckMsNkRBQWlFO0FBR2pFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDdkIsWUFFbUIsY0FBeUMsRUFDekMsWUFBMEI7UUFEMUIsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBQ3pDLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzFDLENBQUM7SUFDSixLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWtCO1FBQ2pDLElBQUk7WUFDRixNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUN4QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTthQUM5QixDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNwRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxzQkFBYSxDQUFDLGFBQWEsRUFBRSxtQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLGVBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDdkMsTUFBTSxJQUFJLHNCQUFhLENBQUMsYUFBYSxFQUFFLG1CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXRCWSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7SUFHUixXQUFBLDBCQUFnQixDQUFDLDhCQUFhLENBQUMsQ0FBQTtxQ0FDQyxvQkFBVTtRQUNaLDRCQUFZO0dBSmxDLFlBQVksQ0FzQnhCO0FBdEJZLG9DQUFZIn0=