import { Repository } from 'typeorm';
import { ObjectType } from '@src/types';
import { AccessEntity } from '@src/entities/model/system/access.entity';
export declare class MenusService {
    private readonly accesRespository;
    constructor(accesRespository: Repository<AccessEntity>);
    menusList(userInfo: ObjectType): Promise<any>;
}
