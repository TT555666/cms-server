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
exports.ToolsService = void 0;
const common_1 = require("@nestjs/common");
const node_auth0_1 = require("node-auth0");
const uuidv4 = require("uuid");
const class_validator_1 = require("class-validator");
let ToolsService = class ToolsService {
    constructor() {
        this.nodeAuth = new node_auth0_1.default();
    }
    get uuid() {
        return uuidv4.v4();
    }
    makePassword(password) {
        return this.nodeAuth.makePassword(password);
    }
    checkPassword(password, sqlPassword) {
        return this.nodeAuth.checkPassword(password, sqlPassword);
    }
    isUUID(id) {
        return class_validator_1.isUUID(id);
    }
    isInt(id) {
        return class_validator_1.isInt(Number(id));
    }
    isEmail(str) {
        return class_validator_1.isEmail(str);
    }
    isMobilePhone(mobile, nation = 'zh-CN') {
        return class_validator_1.isMobilePhone(mobile, nation);
    }
    checkPage(pageSize, pageNumber) {
        if (!class_validator_1.isInt(Number(pageSize)) || !class_validator_1.isInt(Number(pageNumber))) {
            throw new common_1.HttpException(`传递的pageSize:${pageSize},pageNumber:${pageNumber}其中一个不是整数`, common_1.HttpStatus.OK);
        }
    }
    async findByIdOrUuid(id, repository) {
        if (this.isUUID(id)) {
            return await repository.findOne({ uuid: id });
        }
        else if (this.isInt(id)) {
            return await repository.findOne({ id: Number(id) });
        }
        else {
            return new common_1.HttpException(`你传递的参数错误:${id}不是uuid或者id的一种`, common_1.HttpStatus.OK);
        }
    }
};
ToolsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ToolsService);
exports.ToolsService = ToolsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy90b29scy90b29scy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF1RTtBQUN2RSwyQ0FBa0M7QUFFbEMsK0JBQStCO0FBQy9CLHFEQUF3RTtBQUd4RSxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBTUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQU9ELFlBQVksQ0FBQyxRQUFnQjtRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFPRCxhQUFhLENBQUMsUUFBZ0IsRUFBRSxXQUFtQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBT00sTUFBTSxDQUFDLEVBQVU7UUFDdEIsT0FBTyx3QkFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFPTSxLQUFLLENBQUMsRUFBVTtRQUNyQixPQUFPLHVCQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXO1FBQ3hCLE9BQU8seUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sYUFBYSxDQUFDLE1BQWMsRUFBRSxTQUFjLE9BQU87UUFDeEQsT0FBTywrQkFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBT00sU0FBUyxDQUFDLFFBQWdCLEVBQUUsVUFBa0I7UUFDbkQsSUFBSSxDQUFDLHVCQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQzFELE1BQU0sSUFBSSxzQkFBYSxDQUNyQixlQUFlLFFBQVEsZUFBZSxVQUFVLFVBQVUsRUFDMUQsbUJBQVUsQ0FBQyxFQUFFLENBQ2QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQU9NLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBVSxFQUFFLFVBQWU7UUFDckQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ25CLE9BQU8sTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDL0M7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDekIsT0FBTyxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLHNCQUFhLENBQ3RCLFlBQVksRUFBRSxlQUFlLEVBQzdCLG1CQUFVLENBQUMsRUFBRSxDQUNkLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFBO0FBekZZLFlBQVk7SUFEeEIsbUJBQVUsRUFBRTs7R0FDQSxZQUFZLENBeUZ4QjtBQXpGWSxvQ0FBWSJ9