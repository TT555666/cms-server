"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImgService = void 0;
require("dotenv/config");
const fs_1 = require("fs");
const path = require("path");
const fs = require("fs");
const common_1 = require("@nestjs/common");
const nestjs_config_1 = require("nestjs-config");
const moment = require("moment");
const Jimp = require("jimp");
const OSS = require("ali-oss");
const co = require("co");
const client = new OSS({
    accessKeyId: process.env.ALI_OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALI_OSS_ACCESS_KEY_SECRET,
    region: process.env.ALI_OSS_REGION,
});
let UploadImgService = class UploadImgService {
    constructor(configService) {
        this.configService = configService;
    }
    async uploadFile(options) {
        return await this.process(options);
    }
    async uploadFiles(options) {
        const filenameList = [];
        const { files, category, typeList, isCut, isOSS } = options;
        for (const file of files) {
            const result = await this.process({
                files: file,
                category,
                typeList,
                isCut,
                isOSS,
            });
            filenameList.push(result);
        }
        return filenameList;
    }
    async process(options) {
        const { files, category, typeList, isCut, isOSS } = options;
        const extname = path.extname(files.originalname).toLocaleLowerCase();
        const filename = `${Date.now()}${Number.parseInt(String(Math.random() * 1000), 10)}${extname}`;
        if (typeList &&
            typeList.length &&
            !typeList.map((item) => item.toLocaleLowerCase()).includes(extname)) {
            throw new common_1.HttpException(`上传图片格式限制为:[${typeList}]其中一种,你上传的图片格式里包含了:${extname}`, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        if (isOSS) {
            const dirname = moment(Date.now()).format('YYYY/MM/DD');
            const filePath = path.join(category, dirname);
            const target = path.join(filePath, filename);
            return await co(function* () {
                client.useBucket(process.env.ALI_OSS_BUCKET);
                const result = yield client.put(target, files.buffer);
                common_1.Logger.log(result.url, 'UploadImgService.process');
                return { url: result.url, fileName: files.originalname };
            }).catch((err) => {
                common_1.Logger.error(err, 'UploadImgService.process');
                throw new common_1.HttpException(err, common_1.HttpStatus.OK);
            });
        }
        else {
            const filePath = this.fileDirname(category);
            const target = path.join(filePath, filename);
            const writeImage = fs_1.createWriteStream(target);
            writeImage.write(files.buffer);
            if (isCut) {
                this.jimpImg(target, extname);
            }
            const staticPrefixPath = this.configService.get('admin.staticPrefixPath');
            const urlPath = staticPrefixPath
                ? target.replace('public', `/${staticPrefixPath}`)
                : '';
            return {
                url: target.replace('public', urlPath),
                fileName: files.originalname,
            };
        }
    }
    jimpImg(target, fileExtname) {
        const jimpSizeList = this.configService.get('admin.jimpSize');
        Jimp.read(target, (err, image) => {
            if (err) {
                console.log(err);
            }
            else {
                for (const item of jimpSizeList) {
                    image
                        .resize(Number.parseInt(item.width), Number.parseInt(item.height))
                        .quality(100)
                        .write(`${target}_${item.width}x${item.height}${fileExtname}`);
                }
            }
        });
    }
    fileDirname(category) {
        const uplaodBasePath = 'public/uploads';
        const dirname = moment(Date.now()).format('YYYY/MM/DD');
        const filePath = path.join(uplaodBasePath, category, dirname);
        this.mkdirsSync(filePath);
        return filePath;
    }
    mkdirsSync(dirname) {
        if (fs.existsSync(dirname)) {
            return true;
        }
        else {
            if (this.mkdirsSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                return true;
            }
        }
    }
};
__decorate([
    __param(0, common_1.Optional()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadImgService.prototype, "uploadFile", null);
__decorate([
    __param(0, common_1.Optional()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadImgService.prototype, "uploadFiles", null);
__decorate([
    __param(0, common_1.Optional()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadImgService.prototype, "process", null);
UploadImgService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_config_1.InjectConfig()),
    __metadata("design:paramtypes", [nestjs_config_1.ConfigService])
], UploadImgService);
exports.UploadImgService = UploadImgService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWltZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2ZpbGUvdXBsb2FkLWltZy91cGxvYWQtaW1nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUJBQXVCO0FBQ3ZCLDJCQUF1QztBQUN2Qyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLDJDQU13QjtBQUN4QixpREFBNEQ7QUFFNUQsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUU3QiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBZ0J6QixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNyQixXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUI7SUFDOUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCO0lBQ3RELE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7Q0FDbkMsQ0FBQyxDQUFDO0FBR0gsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBNkMsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBU3RFLEtBQUssQ0FBQyxVQUFVLENBQWEsT0FBdUI7UUFDekQsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQVlNLEtBQUssQ0FBQyxXQUFXLENBQWEsT0FBdUI7UUFDMUQsTUFBTSxZQUFZLEdBQTRCLEVBQUUsQ0FBQztRQUNqRCxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1RCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2hD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