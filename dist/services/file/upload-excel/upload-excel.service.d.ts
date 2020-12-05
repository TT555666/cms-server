import { ConfigService } from 'nestjs-config';
import { ObjectType } from '@src/types';
export declare class UploadExcelService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadFile(files: any): [ObjectType[], ObjectType[]];
    private transformExcelData;
}
