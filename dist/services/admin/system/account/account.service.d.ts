import { Repository } from 'typeorm';
import { ToolsService } from '@src/services/tools/tools.service';
import { ObjectType } from '@src/types';
import { UpdatePasswordDto } from '@src/controllers/admin/system/account/dto/update.password.dto';
import { ConfigService } from 'nestjs-config';
import { AccountEntity } from '@src/entities/model/system/account.entity';
import { CreateAccountDto } from '@src/controllers/admin/system/account/dto/create.account.dto';
import { UpdateAccountDto } from '@src/controllers/admin/system/account/dto/update.account.dto';
export declare class AccountService {
    private readonly accountRepository;
    private readonly configService;
    private readonly toolsService;
    constructor(accountRepository: Repository<AccountEntity>, configService: ConfigService, toolsService: ToolsService);
    createAccount(createAccountDto: CreateAccountDto): Promise<string>;
    deleteAccountById(accountId: string, id: number): Promise<string>;
    modifyPassword(id: string, data: UpdatePasswordDto): Promise<AccountEntity>;
    updateById(id: number, data: UpdateAccountDto): Promise<any>;
    findById(id: number): Promise<any>;
    accountList(queryOption: ObjectType): Promise<any>;
    private findOne;
}
