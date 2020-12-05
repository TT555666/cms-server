import { LoginService } from '@src/services/admin/login/login.service';
import { LoginDto } from '@src/controllers/admin/system/login/dto/login.dto';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    adminLogin(loginDto: LoginDto): Promise<any>;
}
