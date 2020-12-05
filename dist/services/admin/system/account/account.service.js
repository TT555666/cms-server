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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tools_service_1 = require("../../../tools/tools.service");
const types_1 = require("../../../../types");
const update_password_dto_1 = require("../../../../controllers/admin/system/account/dto/update.password.dto");
const nestjs_config_1 = require("nestjs-config");
const utils_1 = require("../../../../utils");
const account_entity_1 = require("../../../../entities/model/system/account.entity");
const create_account_dto_1 = require("../../../../controllers/admin/system/account/dto/create.account.dto");
const update_account_dto_1 = require("../../../../controllers/admin/system/account/dto/update.account.dto");
const account_role_entity_1 = require("../../../../entities/model/system/account_role.entity");
const typeorm_3 = require("typeorm");
const utils_2 = require("../../../../utils");
const sameList = ['status', 'platform'];
const likeList = ['username', 'name', 'mobile', 'email'];
let AccountService = class AccountService {
    constructor(accountRepository, configService, toolsService) {
        this.accountRepository = accountRepository;
        this.configService = configService;
        this.toolsService = toolsService;
    }
    async createAccount(createAccountDto) {
        try {
            let { username, roles, password } = createAccountDto, oths = __rest(createAccountDto, ["username", "roles", "password"]);
            if (await this.findOne('username', username)) {
                throw new common_1.HttpException(`${username}已经存在,不能重复添加`, common_1.HttpStatus.OK);
            }
            return typeorm_2.getManager()
                .transaction(async (entityManage) => {
                const newPassword = this.toolsService.makePassword(password);
                const account = await entityManage.save(account_entity_1.AccountEntity, Object.assign({ username, password: newPassword }, utils_1.fileObjectField(oths)));
                if (roles) {
                    const rolesList = roles.split(',');
                    for (const item of rolesList) {
                        await entityManage.save(account_role_entity_1.AccountRoleEntity, {
                            accountId: account.id,
                            roleId: Number(item),
                        });
                    }
                }
            })
                .then(async () => {
                return '创建成功';
            })
                .catch((e) => {
                console.log('创建账号', e);
                throw new common_1.HttpException('创建失败', common_1.HttpStatus.OK);
            });
        }
        catch (e) {
            common_1.Logger.error(e, 'account.service');
            throw new common_1.HttpException(e, common_1.HttpStatus.OK);
        }
    }
    async deleteAccountById(accountId, id) {
        if (Object.is(String(accountId), String(id))) {
            throw new common_1.HttpException('不能自己删除自己', common_1.HttpStatus.OK);
        }
        const { raw: { affectedRows }, } = await this.accountRepository.update(id, { isDel: 1 });
        if (affectedRows) {
            return '删除成功';
        }
        else {
            return '删除失败';
        }
        return '删除失败';
    }
    async modifyPassword(id, data) {
        const { password, checkPassword, oldPassword } = data;
        if (!Object.is(password, checkPassword)) {
            throw new common_1.HttpException('两次密码不一致', common_1.HttpStatus.OK);
        }
        const account = await this.toolsService.findByIdOrUuid(id, this.accountRepository);
        if (account &&
            this.toolsService.checkPassword(oldPassword, account.password)) {
            const { raw: { changedRows }, } = await this.accountRepository.update(id, { password });
            if (changedRows) {
                return await this.accountRepository.findOne({ id: Number(id) });
            }
            else {
                throw new common_1.HttpException('修改密码失败', common_1.HttpStatus.OK);
            }
        }
        else {
            throw new common_1.HttpException('修改密码失败', common_1.HttpStatus.OK);
        }
    }
    async updateById(id, data) {
        try {
            const { username } = data;
            const searchUsernameResult = await this.accountRepository.findOne({
                where: { username },
            });
            if (searchUsernameResult && !Object.is(id, searchUsernameResult.id)) {
                throw new common_1.HttpException(`你修改的username:${username},数据库已经存在,不能重名`, common_1.HttpStatus.OK);
            }
            return typeorm_2.getManager()
                .transaction(async (entityManager) => {
                const { roles } = data, oths = __rest(data, ["roles"]);
                await entityManager.update(account_entity_1.AccountEntity, id, oths);
                const rolesList = roles.split(',');
                await entityManager.delete(account_role_entity_1.AccountRoleEntity, { accountId: id });
                if (roles) {
                    for (const item of rolesList) {
                        await entityManager.save(account_role_entity_1.AccountRoleEntity, {
                            accountId: id,
                            roleId: Number(item),
                        });
                    }
                }
            })
                .then(async () => {
                return '修改成功';
            })
                .catch((e) => {
                console.log('修改账号', e);
                throw new common_1.HttpException('修改失败', common_1.HttpStatus.OK);
            });
        }
        catch (e) {
            throw new common_1.HttpException('修改失败', common_1.HttpStatus.OK);
        }
    }
    async findById(id) {
        const account = await typeorm_3.getConnection()
            .createQueryBuilder(account_entity_1.AccountEntity, 'account')
            .andWhere('(account.id= :id and account.isDel=0)', { id })
            .getOne();
        return account.toResponseObject();
    }
    async accountList(queryOption) {
        const { pageSize = 10, pageNumber = 1 } = utils_2.channelObject(queryOption);
        this.toolsService.checkPage(pageSize, pageNumber);
        const queryConditionList = ['account.isDel = 0 and account.id > 1'];
        const queryObj = Object.create(null);
        sameList.forEach((item) => {
            if (utils_2.channelObject(queryOption)[item]) {
                queryConditionList.push(`account.${item} = :${item}`);
                queryObj[item] = item;
            }
        });
        likeList.forEach((item) => {
            if (utils_2.channelObject(queryOption)[item]) {
                queryConditionList.push(`account.${item} LIKE :${item}`);
                queryObj[item] = `$${item}$`;
            }
        });
        const queryCondition = queryConditionList.join(' AND ');
        const [data, total] = await typeorm_3.getConnection()
            .createQueryBuilder(account_entity_1.AccountEntity, 'account')
            .andWhere(queryCondition, Object.assign({}, queryObj))
            .orderBy({ 'account.id': 'DESC' })
            .leftJoin(account_role_entity_1.AccountRoleEntity, 'account_role', 'account.id=account_role.account_id')
            .skip((pageNumber - 1) * pageSize)
            .take(pageSize)
            .printSql()
            .getManyAndCount();
        return {
            data: data.map((item) => {
                const { password, mobile, email, username, nodeAuth } = item, others = __rest(item, ["password", "mobile", "email", "username", "nodeAuth"]);
                return Object.assign(others, {
                    mobile: this.toolsService.isUUID(mobile) ? '' : mobile,
                    email: this.toolsService.isUUID(email) ? '' : email,
                    username: this.toolsService.isUUID(username) ? '' : username,
                });
            }),
            total,
            pageNumber,
            pageSize,
        };
    }
    async findOne(filesName, value) {
        return await this.accountRepository.findOne({
            where: { [filesName]: value },
        });
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(account_entity_1.AccountEntity)),
    __param(1, nestjs_config_1.InjectConfig()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        nestjs_config_1.ConfigService,
        tools_service_1.ToolsService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2FkbWluL3N5c3RlbS9hY2NvdW50L2FjY291bnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUErRTtBQUMvRSw2Q0FBbUQ7QUFDbkQscUNBQWdFO0FBQ2hFLGdFQUFpRTtBQUNqRSw2Q0FBd0M7QUFDeEMsOEdBQWtHO0FBQ2xHLGlEQUE0RDtBQUM1RCw2Q0FBNkM7QUFJN0MscUZBQTBFO0FBQzFFLDRHQUFnRztBQUNoRyw0R0FBZ0c7QUFDaEcsK0ZBQW1GO0FBRW5GLHFDQUF3QztBQUN4Qyw2Q0FBMkM7QUFDM0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDeEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV6RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3pCLFlBSW1CLGlCQUE0QyxFQUU1QyxhQUE0QixFQUM1QixZQUEwQjtRQUgxQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTJCO1FBRTVDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzFDLENBQUM7SUFNSixLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFrQztRQUNwRCxJQUFJO1lBQ0YsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxLQUFjLGdCQUFnQixFQUF6QixJQUFJLFVBQUssZ0JBQWdCLEVBQXpELGlDQUFzQyxDQUFtQixDQUFDO1lBQzlELElBQUksTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLEdBQUcs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