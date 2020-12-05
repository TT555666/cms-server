"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const access_entity_1 = require("./model/system/access.entity");
const account_entity_1 = require("./model/system/account.entity");
const entityList = [
    account_entity_1.AccountEntity,
    access_entity_1.AccessEntity,
];
let EntityModule = class EntityModule {
};
EntityModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature(entityList)],
        exports: [typeorm_1.TypeOrmModule.forFeature(entityList)],
    })
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL2VudGl0aWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsNkNBQWdEO0FBRWhELGdFQUE0RDtBQUc1RCxrRUFBOEQ7QUFHOUQsTUFBTSxVQUFVLEdBQUc7SUFDakIsOEJBQWE7SUFHYiw0QkFBWTtDQUdiLENBQUM7QUFNRixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFKeEIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsT0FBTyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDaEQsQ0FBQztHQUNXLFlBQVksQ0FBRztBQUFmLG9DQUFZIn0=