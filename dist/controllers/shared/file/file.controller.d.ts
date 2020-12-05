import { ConfigService } from 'nestjs-config';
import { UploadImgService } from '@src/services/file/upload-img/upload-img.service';
export declare class FileController {
    private readonly configService;
    private readonly uploadImgService;
    constructor(configService: ConfigService, uploadImgService: UploadImgService);
    uploadImage(file: any, category?: string): Promise<any>;
}
