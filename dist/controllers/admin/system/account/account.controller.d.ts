import { ObjectType } from '@src/types';
import { AccountService } from '@src/services/admin/system/account/account.service';
import { CreateAccountDto } from '@src/controllers/admin/system/account/dto/create.account.dto';
import { UpdatePasswordDto } from '@src/controllers/admin/system/account/dto/update.password.dto';
import { UpdateAccountDto } from '@src/controllers/admin/system/account/dto/update.account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    createAccount(createAccountDto: CreateAccountDto): Promise<string>;
    deleteAccountById(userId: string, id: number): Promise<string>;
    modifyPassword(id: string, data: UpdatePasswordDto): Promise<any>;
    updateById(id: number, data: UpdateAccountDto): Promise<any>;
    findById(id: number): Promise<any>;
    accountList(queryOption: ObjectType): Promise<any>;
}
