import { LoginDto } from '@src/controllers/admin/system/login/dto/login.dto';
import { AccountEntity } from '@src/entities/model/system/account.entity';
import { Repository } from 'typeorm';
import { ToolsService } from '@src/services/tools/tools.service';
export declare class LoginService {
    private readonly userRepository;
    private readonly toolsService;
    constructor(userRepository: Repository<AccountEntity>, toolsService: ToolsService);
    adminLogin(loginDto: LoginDto): Promise<any>;
}
