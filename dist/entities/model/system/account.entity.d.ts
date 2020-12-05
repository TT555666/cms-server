import { PublicEntity } from '../public.entity';
export declare class AccountEntity extends PublicEntity {
    private nodeAuth;
    constructor();
    username: string;
    password: string;
    platform: number;
    isSuper: number;
    makePassword(): void;
    checkPassword(password: string, sqlPassword: string): boolean;
    private get token();
    toResponseObject(isShowToken?: boolean): Record<string, unknown>;
}
