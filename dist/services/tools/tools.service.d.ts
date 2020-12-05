export declare class ToolsService {
    private nodeAuth;
    constructor();
    get uuid(): string;
    makePassword(password: string): string;
    checkPassword(password: string, sqlPassword: string): boolean;
    isUUID(id: string): boolean;
    isInt(id: string): boolean;
    isEmail(str: string): boolean;
    isMobilePhone(mobile: string, nation?: any): boolean;
    checkPage(pageSize: number, pageNumber: number): void;
    findByIdOrUuid(id: string, repository: any): Promise<any>;
}
