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
exports.UploadExcelService = void 0;
const path = require("path");
const common_1 = require("@nestjs/common");
const node_xlsx_1 = require("node-xlsx");
const nestjs_config_1 = require("nestjs-config");
const types_1 = require("../../../types");
let UploadExcelService = class UploadExcelService {
    constructor(configService) {
        this.configService = configService;
    }
    uploadFile(files) {
        return this.transformExcelData(files);
    }
    transformExcelData(files) {
        const extname = path.extname(files.originalname).toLocaleLowerCase();
        if (!['.xlsx', '.xls', '.xlt', '.xlsm'].includes(extname)) {
            throw new common_1.HttpException(`${files.originalname}文件格式不正确, 必须为['.xlsx', '.xls', '.xlt', '.xlsm']其中的一种`, common_1.HttpStatus.OK);
        }
        const workSheets = node_xlsx_1.default.parse(files.buffer, { encoding: 'binary' });
        const firstTableData = workSheets[0].data;
        const titleList = firstTableData[0];
        const resultArray = [];
        for (let row = 1; row < firstTableData.length; row++) {
            const obj1 = {};
            for (let col = 0; col < firstTableData[row].length; col++) {
                obj1[titleList[col]] = firstTableData[row][col];
            }
            resultArray.push(obj1);
        }
        return [titleList, resultArray];
    }
};
UploadExcelService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_config_1.InjectConfig()),
    __metadata("design:paramtypes", [nestjs_config_1.ConfigService])
], UploadExcelService);
exports.UploadExcelService = UploadExcelService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWV4Y2VsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvZmlsZS91cGxvYWQtZXhjZWwvdXBsb2FkLWV4Y2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsNkJBQTZCO0FBQzdCLDJDQUF1RTtBQUN2RSx5Q0FBNkI7QUFDN0IsaURBQTREO0FBQzVELDBDQUF3QztBQUd4QyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUM3QixZQUE2QyxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7SUFPdEUsVUFBVSxDQUFDLEtBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQU9PLGtCQUFrQixDQUFDLEtBQVU7UUFFbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekQsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLEdBQUcsS0FBSyxDQUFDLFlBQVkscURBQXFELEVBQzFFLG1CQUFVLENBQUMsRUFBRSxDQUNkLENBQUM7U0FDSDtRQUNELE1BQU0sVUFBVSxHQUFHLG1CQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRSxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBUSxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7QUF6Q1ksa0JBQWtCO0lBRDlCLG1CQUFVLEVBQUU7SUFFRSxXQUFBLDRCQUFZLEVBQUUsQ0FBQTtxQ0FBaUMsNkJBQWE7R0FEOUQsa0JBQWtCLENBeUM5QjtBQXpDWSxnREFBa0IifQ==