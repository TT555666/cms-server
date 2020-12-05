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
exports.PublicEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
class PublicEntity extends typeorm_1.BaseEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id',
    }),
    __metadata("design:type", Number)
], PublicEntity.prototype, "id", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column('tinyint', {
        nullable: false,
        default: () => 0,
        name: 'is_del',
        comment: '是否删除,1表示删除,0表示正常',
    }),
    __metadata("design:type", Number)
], PublicEntity.prototype, "isDel", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        nullable: false,
        name: 'created_at',
        comment: '创建时间',
    }),
    __metadata("design:type", Date)
], PublicEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        nullable: false,
        name: 'updated_at',
        comment: '更新时间',
    }),
    __metadata("design:type", Date)
], PublicEntity.prototype, "updatedAt", void 0);
exports.PublicEntity = PublicEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdGllcy9tb2RlbC9wdWJsaWMuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQU1pQjtBQUNqQix5REFBNEM7QUFHNUMsTUFBYSxZQUFhLFNBQVEsb0JBQVU7Q0FnQzNDO0FBMUJDO0lBTEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLEtBQUs7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUM7O3dDQUNTO0FBU1g7SUFQQywyQkFBTyxFQUFFO0lBQ1QsZ0JBQU0sQ0FBQyxTQUFTLEVBQUU7UUFDakIsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7S0FDNUIsQ0FBQzs7MkNBQ1k7QUFRZDtJQU5DLDBCQUFnQixDQUFDO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsSUFBSSxFQUFFLFlBQVk7UUFDbEIsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQzs4QkFDUyxJQUFJOytDQUFDO0FBUWhCO0lBTkMsMEJBQWdCLENBQUM7UUFDaEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUUsWUFBWTtRQUNsQixPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDOzhCQUNTLElBQUk7K0NBQUM7QUEvQmxCLG9DQWdDQyJ9