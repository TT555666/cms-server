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
exports.AccessService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const access_entity_1 = require("../../../../entities/model/system/access.entity");
const typeorm_2 = require("typeorm");
const create_access_dto_1 = require("../../../../controllers/admin/system/access/dto/create.access.dto");
let AccessService = class AccessService {
    constructor(accessRepository) {
        this.accessRepository = accessRepository;
    }
    async createAccess(createAccessDto) {
        try {
            const { moduleName, actionName } = createAccessDto;
            if (moduleName) {
                const result = await this.accessRepository.findOne({
                    where: { moduleName },
                });
                if (result) {
                    throw new common_1.HttpException(`你修改的moduleName:${moduleName},数据库已经存在,不能重名`, common_1.HttpStatus.OK);
                }
            }
            if (actionName) {
                const result = await this.accessRepository.findOne({
                    where: { actionName, moduleName },
                });
                if (result) {
                    throw new common_1.HttpException(`你修改的actionName:${actionName},数据库已经存在,不能重名`, common_1.HttpStatus.OK);
                }
            }
            const access = await this.accessRepository.create(createAccessDto);
            return await this.accessRepository.save(access);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.OK);
        }
    }
};
AccessService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(access_entity_1.AccessEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccessService);
exports.AccessService = AccessService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvYWRtaW4vc3lzdGVtL2FjY2Vzcy9hY2Nlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUU7QUFDdkUsNkNBQW1EO0FBQ25ELG1GQUF3RTtBQUN4RSxxQ0FBcUM7QUFDckMseUdBQTZGO0FBRzdGLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFDeEIsWUFFbUIsZ0JBQTBDO1FBQTFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7SUFDMUQsQ0FBQztJQU1KLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBZ0M7UUFDakQsSUFBSTtZQUNGLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsZUFBZSxDQUFDO1lBQ25ELElBQUksVUFBVSxFQUFFO2dCQUNkLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztvQkFDakQsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLGtCQUFrQixVQUFVLGVBQWUsRUFDM0MsbUJBQVUsQ0FBQyxFQUFFLENBQ2QsQ0FBQztpQkFDSDthQUNGO1lBQ0QsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUNqRCxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO2lCQUNsQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLGtCQUFrQixVQUFVLGVBQWUsRUFDM0MsbUJBQVUsQ0FBQyxFQUFFLENBQ2QsQ0FBQztpQkFDSDthQUNGO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksc0JBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLG1CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXpDWSxhQUFhO0lBRHpCLG1CQUFVLEVBQUU7SUFHUixXQUFBLDBCQUFnQixDQUFDLDRCQUFZLENBQUMsQ0FBQTtxQ0FDSSxvQkFBVTtHQUhwQyxhQUFhLENBeUN6QjtBQXpDWSxzQ0FBYSJ9