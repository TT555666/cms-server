import { AccessEntity } from '@src/entities/model/system/access.entity';
import { Repository } from 'typeorm';
import { CreateAccessDto } from '@src/controllers/admin/system/access/dto/create.access.dto';
export declare class AccessService {
    private readonly accessRepository;
    constructor(accessRepository: Repository<AccessEntity>);
    createAccess(createAccessDto: CreateAccessDto): Promise<any>;
}
