import { ObjectType } from '@src/types';
import { MenusService } from '@src/services/admin/system/menus/menus.service';
export declare class MenusController {
    private readonly menusService;
    constructor(menusService: MenusService);
    menusList(userInfo: ObjectType): Promise<any>;
}
