import 'dotenv/config';
import { ConfigService } from 'nestjs-config';
interface uploadFileType {
    files: any;
    category?: string;
    typeList?: string[];
    isCut?: boolean;
    isOSS?: boolean;
}
export declare class UploadImgService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadFile(options: uploadFileType): Promise<any>;
    uploadFiles(options: uploadFileType): Promise<any>;
    private process;
    private jimpImg;
    private fileDirname;
    private mkdirsSync;
}
export {};
