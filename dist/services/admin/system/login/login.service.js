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
const login_dto_1 = require("../../../../controllers/admin/system/login/dto/login.dto");
const account_entity_1 = require("../../../../entities/model/system/account.entity");
const typeorm_2 = require("typeorm");
const tools_service_1 = require("../../../tools/tools.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hZG1pbi9zeXN0ZW0vbG9naW4vbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFDL0UsNkNBQW1EO0FBQ25ELHdGQUE2RTtBQUM3RSxxRkFBMEU7QUFDMUUscUNBQXFDO0FBQ3JDLGdFQUFpRTtBQUdqRSxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3ZCLFlBRW1CLGNBQXlDLEVBQ3pDLFlBQTBCO1FBRDFCLG1CQUFjLEdBQWQsY0FBYyxDQUEyQjtRQUN6QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUMxQyxDQUFDO0lBQ0osS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFrQjtRQUNqQyxJQUFJO1lBQ0YsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxNQUFNLElBQUksc0JBQWEsQ0FBQyxhQUFhLEVBQUUsbUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2RDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxlQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxzQkFBYSxDQUFDLGFBQWEsRUFBRSxtQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF0QlksWUFBWTtJQUR4QixtQkFBVSxFQUFFO0lBR1IsV0FBQSwwQkFBZ0IsQ0FBQyw4QkFBYSxDQUFDLENBQUE7cUNBQ0Msb0JBQVU7UUFDWiw0QkFBWTtHQUpsQyxZQUFZLENBc0J4QjtBQXRCWSxvQ0FBWSJ9