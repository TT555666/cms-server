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
exports.AccessEntity = void 0;
const typeorm_1 = require("typeorm");
const public_entity_1 = require("../public.entity");
let AccessEntity = class AccessEntity extends public_entity_1.PublicEntity {
};
__decorate([
    typeorm_1.Column('varchar', {
        nullable: true,
        length: 50,
        name: 'module_name',
        comment: '模块名称',
    }),
    __metadata("design:type", String)
], AccessEntity.prototype, "moduleName", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: true,
        length: 100,
        name: 'action_name',
        comment: '操作名称',
    }),
    __metadata("design:type", String)
], AccessEntity.prototype, "actionName", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: true,
        length: 100,
        name: 'icon',
        comment: '小图标',
    }),
    __metadata("design:type", String)
], AccessEntity.prototype, "icon", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: true,
        length: 100,
        name: 'url',
        comment: 'url地址',
    }),
    __metadata("design:type", String)
], AccessEntity.prototype, "url", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: false,
        default: () => -1,
        name: 'module_id',
        comment: '父模块id',
    }),
    __metadata("design:type", Number)
], AccessEntity.prototype, "moduleId", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: false,
        default: () => 1,
        name: 'sort',
        comment: '排序',
    }),
    __metadata("design:type", Number)
], AccessEntity.prototype, "sort", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: true,
        length: 100,
        name: 'description',
        comment: '描素',
    }),
    __metadata("design:type", String)
], AccessEntity.prototype, "description", void 0);
AccessEntity = __decorate([
    typeorm_1.Entity('access')
], AccessEntity);
exports.AccessEntity = AccessEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbnRpdGllcy9tb2RlbC9zeXN0ZW0vYWNjZXNzLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBeUM7QUFDekMsb0RBQWdEO0FBR2hELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSw0QkFBWTtDQXdEN0MsQ0FBQTtBQWpEQztJQU5DLGdCQUFNLENBQUMsU0FBUyxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsYUFBYTtRQUNuQixPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDOztnREFDd0I7QUFRMUI7SUFOQyxnQkFBTSxDQUFDLFNBQVMsRUFBRTtRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxHQUFHO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQzs7Z0RBQ3dCO0FBUTFCO0lBTkMsZ0JBQU0sQ0FBQyxTQUFTLEVBQUU7UUFDakIsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsR0FBRztRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzswQ0FDa0I7QUFRcEI7SUFOQyxnQkFBTSxDQUFDLFNBQVMsRUFBRTtRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxHQUFHO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDOzt5Q0FDaUI7QUFRbkI7SUFOQyxnQkFBTSxDQUFDLEtBQUssRUFBRTtRQUNiLFFBQVEsRUFBRSxLQUFLO1FBQ2YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLEVBQUUsV0FBVztRQUNqQixPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDOzs4Q0FDZTtBQVFqQjtJQU5DLGdCQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2IsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQzs7MENBQ1c7QUFRYjtJQU5DLGdCQUFNLENBQUMsU0FBUyxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLEdBQUc7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7O2lEQUN5QjtBQXZEaEIsWUFBWTtJQUR4QixnQkFBTSxDQUFDLFFBQVEsQ0FBQztHQUNKLFlBQVksQ0F3RHhCO0FBeERZLG9DQUFZIn0=