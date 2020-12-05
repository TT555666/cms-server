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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWV4Y2VsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlL2ZpbGUvdXBsb2FkLWV4Y2VsL3VwbG9hZC1leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLDZCQUE2QjtBQUM3QiwyQ0FBdUU7QUFDdkUseUNBQTZCO0FBQzdCLGlEQUE0RDtBQUM1RCwwQ0FBd0M7QUFJeEMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFDbUMsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDM0QsQ0FBQztJQVVFLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFVTyxrQkFBa0IsQ0FBQyxLQUFVO1FBRW5DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pELE1BQU0sSUFBSSxzQkFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVkscURBQXFELEVBQUUsbUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUNuSDtRQUNELE1BQU0sVUFBVSxHQUFHLG1CQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRSxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBUSxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7QUE5Q1ksa0JBQWtCO0lBRDlCLG1CQUFVLEVBQUU7SUFHUixXQUFBLDRCQUFZLEVBQUUsQ0FBQTtxQ0FBaUMsNkJBQWE7R0FGcEQsa0JBQWtCLENBOEM5QjtBQTlDWSxnREFBa0IifQ==