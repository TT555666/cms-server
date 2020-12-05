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
exports.AccountRoleEntity = void 0;
const typeorm_1 = require("typeorm");
const public_entity_1 = require("../public.entity");
let AccountRoleEntity = class AccountRoleEntity extends public_entity_1.PublicEntity {
};
__decorate([
    typeorm_1.Column('int', {
        nullable: false,
        name: 'account_id',
        comment: '用户id',
    }),
    __metadata("design:type", Number)
], AccountRoleEntity.prototype, "accountId", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: false,
        name: 'role_id',
        comment: '角色id',
    }),
    __metadata("design:type", Number)
], AccountRoleEntity.prototype, "roleId", void 0);
AccountRoleEntity = __decorate([
    typeorm_1.Entity('account_role')
], AccountRoleEntity);
exports.AccountRoleEntity = AccountRoleEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudF9yb2xlLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbnRpdGllcy9tb2RlbC9zeXN0ZW0vYWNjb3VudF9yb2xlLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBeUM7QUFDekMsb0RBQWdEO0FBR2hELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsNEJBQVk7Q0FjbEQsQ0FBQTtBQVJDO0lBTEMsZ0JBQU0sQ0FBQyxLQUFLLEVBQUU7UUFDYixRQUFRLEVBQUUsS0FBSztRQUNmLElBQUksRUFBRSxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUM7O29EQUNnQjtBQU9sQjtJQUxDLGdCQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2IsUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUM7O2lEQUNhO0FBYkosaUJBQWlCO0lBRDdCLGdCQUFNLENBQUMsY0FBYyxDQUFDO0dBQ1YsaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIn0=