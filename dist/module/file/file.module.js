"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
const common_1 = require("@nestjs/common");
const upload_img_service_1 = require("./upload-img/upload-img.service");
const upload_excel_service_1 = require("./upload-excel/upload-excel.service");
let FileModule = class FileModule {
};
FileModule = __decorate([
    common_1.Module({
        providers: [upload_img_service_1.UploadImgService, upload_excel_service_1.UploadExcelService],
        exports: [upload_img_service_1.UploadImgService, upload_excel_service_1.UploadExcelService],
    })
], FileModule);
exports.FileModule = FileModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlL2ZpbGUvZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHdFQUFtRTtBQUNuRSw4RUFBeUU7QUFNekUsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtDQUFHLENBQUE7QUFBYixVQUFVO0lBSnRCLGVBQU0sQ0FBQztRQUNOLFNBQVMsRUFBRSxDQUFDLHFDQUFnQixFQUFFLHlDQUFrQixDQUFDO1FBQ2pELE9BQU8sRUFBRSxDQUFDLHFDQUFnQixFQUFFLHlDQUFrQixDQUFDO0tBQ2hELENBQUM7R0FDVyxVQUFVLENBQUc7QUFBYixnQ0FBVSJ9