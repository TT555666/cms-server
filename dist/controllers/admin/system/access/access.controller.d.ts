import { AccessService } from '@src/services/admin/system/access/access.service';
import { CreateAccessDto } from './dto/create.access.dto';
export declare class AccessControl {
    private readonly accessService;
    constructor(accessService: AccessService);
    createAccess(createAccessDto: CreateAccessDto): Promise<any>;
}
