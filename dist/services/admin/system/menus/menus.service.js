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
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const types_1 = require("../../../../types");
const access_entity_1 = require("../../../../entities/model/system/access.entity");
const account_entity_1 = require("../../../../entities/model/system/account.entity");
let MenusService = class MenusService {
    constructor(accesRespository) {
        this.accesRespository = accesRespository;
    }
    async menusList(userInfo) {
        try {
            const { isSuper, id: accountId } = userInfo;
            const resultList = await this.accesRespository
                .createQueryBuilder('access')
                .orderBy({ 'access.sort': 'ASC' })
                .where('access.isDel=0')
                .getMany();
            const formatMenus = resultList.map((item) => {
                const { id, moduleName, actionName, moduleId, url, sort, icon } = item;
                return {
                    id,
                    url,
                    sort,
                    icon,
                    parentId: moduleId,
                    name: moduleName ? moduleName : actionName,
                };
            });
            if (Object.is(isSuper, 1)) {
                return formatMenus;
            }
            const alreadySelectedAccessList = await typeorm_2.getConnection()
                .createQueryBuilder(account_entity_1.AccountEntity, 'account')
                .where('(account.id=:accountId and account.isDel=0)', { accountId })
                .innerJoinAndMapMany('account.access', access_entity_1.AccessEntity, 'access', 'role_access.accessId=access.id and access.isDel=0')
                .getOne();
            if (alreadySelectedAccessList) {
                const alreadySelectedAccessIdList = alreadySelectedAccessList.access.map((item) => item.id);
                return formatMenus.filter((item) => alreadySelectedAccessIdList.includes(item.id));
            }
            else {
                return [];
            }
        }
        catch (error) {
            throw new common_1.HttpException('获取菜单失败', common_1.HttpStatus.OK);
        }
    }
};
MenusService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(access_entity_1.AccessEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hZG1pbi9zeXN0ZW0vbWVudXMvbWVudXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUU7QUFDdkUsNkNBQW1EO0FBQ25ELHFDQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMsbUZBQXdFO0FBQ3hFLHFGQUEwRTtBQUcxRSxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3ZCLFlBRW1CLGdCQUEwQztRQUExQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTBCO0lBQzFELENBQUM7SUFXSixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQW9CO1FBQ2xDLElBQUk7WUFDRixNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFFNUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2lCQUMzQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7aUJBQzVCLE9BQU8sQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDakMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2lCQUN2QixPQUFPLEVBQUUsQ0FBQztZQUNiLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDdkUsT0FBTztvQkFDTCxFQUFFO29CQUNGLEdBQUc7b0JBQ0gsSUFBSTtvQkFDSixJQUFJO29CQUNKLFFBQVEsRUFBRSxRQUFRO29CQUNsQixJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVU7aUJBQzNDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSx5QkFBeUIsR0FBUSxNQUFNLHVCQUFhLEVBQUU7aUJBQ3pELGtCQUFrQixDQUFDLDhCQUFhLEVBQUUsU0FBUyxDQUFDO2lCQUM1QyxLQUFLLENBQUMsNkNBQTZDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFXbkUsbUJBQW1CLENBQ2xCLGdCQUFnQixFQUNoQiw0QkFBWSxFQUNaLFFBQVEsRUFDUixtREFBbUQsQ0FDcEQ7aUJBQ0EsTUFBTSxFQUFFLENBQUM7WUFDWixJQUFJLHlCQUF5QixFQUFFO2dCQUM3QixNQUFNLDJCQUEyQixHQUFHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ3RFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNsQixDQUFDO2dCQUNGLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUM3QywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksc0JBQWEsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7Q0FDRixDQUFBO0FBMUVZLFlBQVk7SUFEeEIsbUJBQVUsRUFBRTtJQUdSLFdBQUEsMEJBQWdCLENBQUMsNEJBQVksQ0FBQyxDQUFBO3FDQUNJLG9CQUFVO0dBSHBDLFlBQVksQ0EwRXhCO0FBMUVZLG9DQUFZIn0=