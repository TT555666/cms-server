import { PublicEntity } from '../public.entity';
export declare class AccessEntity extends PublicEntity {
    moduleName: string | null;
    actionName: string | null;
    icon: string | null;
    url: string | null;
    moduleId: number;
    sort: number;
    description: string | null;
}
