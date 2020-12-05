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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const jwt = require("jsonwebtoken");
const node_auth0_1 = require("node-auth0");
const types_1 = require("../../../types");
const public_entity_1 = require("../public.entity");
let AccountEntity = class AccountEntity extends public_entity_1.PublicEntity {
    constructor() {
        super();
        this.nodeAuth = new node_auth0_1.default();
    }
    makePassword() {
        this.password = this.nodeAuth.makePassword(this.password);
    }
    checkPassword(password, sqlPassword) {
        return this.nodeAuth.checkPassword(password, sqlPassword);
    }
    get token() {
        const { id, username, isSuper } = this;
        return jwt.sign({
            id,
            username,
            isSuper,
        }, process.env.SECRET, {
            expiresIn: '7d',
        });
    }
    toResponseObject(isShowToken = true) {
        const _a = this, { nodeAuth, password, token, isDel } = _a, params = __rest(_a, ["nodeAuth", "password", "token", "isDel"]);
        const responseData = Object.assign({}, params);
        if (isShowToken) {
            return Object.assign(responseData, { token });
        }
        else {
            return responseData;
        }
    }
};
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", node_auth0_1.default)
], AccountEntity.prototype, "nodeAuth", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: false,
        length: 50,
        name: 'username',
        comment: '用户名',
    }),
    __metadata("design:type", String)
], AccountEntity.prototype, "username", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column('varchar', {
        nullable: false,
        length: 100,
        name: 'password',
        comment: '密码',
    }),
    __metadata("design:type", String)
], AccountEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: true,
        name: 'platform',
        comment: '平台',
    }),
    __metadata("design:type", Number)
], AccountEntity.prototype, "platform", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        nullable: false,
        default: () => 0,
        name: 'is_super',
        comment: '是否为超级管理员1表示是,0表示不是',
    }),
    __metadata("design:type", Number)
], AccountEntity.prototype, "isSuper", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccountEntity.prototype, "makePassword", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AccountEntity.prototype, "token", null);
AccountEntity = __decorate([
    typeorm_1.Entity('account'),
    __metadata("design:paramtypes", [])
], AccountEntity);
exports.AccountEntity = AccountEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW50aXRpZXMvbW9kZWwvc3lzdGVtL2FjY291bnQuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXVEO0FBQ3ZELHlEQUFvRDtBQUNwRCxvQ0FBb0M7QUFDcEMsMkNBQWtDO0FBQ2xDLDBDQUF3QztBQUN4QyxvREFBZ0Q7QUFJaEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLDRCQUFZO0lBSTdDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUEwQ0QsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFPRCxhQUFhLENBQUMsUUFBZ0IsRUFBRSxXQUFtQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBT0QsSUFBWSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXZDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FDYjtZQUNFLEVBQUU7WUFDRixRQUFRO1lBQ1IsT0FBTztTQUNSLEVBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQ2xCO1lBQ0UsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQU9NLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxJQUFJO1FBRXhDLE1BQU0sS0FBa0QsSUFBSSxFQUF0RCxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssT0FBb0IsRUFBZixNQUFNLGNBQTdDLDBDQUErQyxDQUFPLENBQUM7UUFDN0QsTUFBTSxZQUFZLHFCQUNiLE1BQU0sQ0FDVixDQUFDO1FBQ0YsSUFBSSxXQUFXLEVBQUU7WUFDZixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsT0FBTyxZQUFZLENBQUM7U0FDckI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWpHQztJQURDLDJCQUFPLEVBQUU7OEJBQ1Esb0JBQVE7K0NBQUM7QUFhM0I7SUFQQyxnQkFBTSxDQUFDLFNBQVMsRUFBRTtRQUVqQixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzsrQ0FDZTtBQVNqQjtJQVBDLDJCQUFPLEVBQUU7SUFDVCxnQkFBTSxDQUFDLFNBQVMsRUFBRTtRQUNqQixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxHQUFHO1FBQ1gsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDOzsrQ0FDZTtBQU9qQjtJQUxDLGdCQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7OytDQUNlO0FBUWpCO0lBTkMsZ0JBQU0sQ0FBQyxTQUFTLEVBQUU7UUFDakIsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoQixJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUUsb0JBQW9CO0tBQzlCLENBQUM7OzhDQUNjO0FBU2hCO0lBREMsc0JBQVksRUFBRTs7OztpREFHZDtBQWdCRDtJQURDLDBCQUFNLEVBQUU7OzswQ0FlUjtBQWpGVSxhQUFhO0lBRHpCLGdCQUFNLENBQUMsU0FBUyxDQUFDOztHQUNMLGFBQWEsQ0FvR3pCO0FBcEdZLHNDQUFhIn0=