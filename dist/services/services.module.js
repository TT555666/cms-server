"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
const common_1 = require("@nestjs/common");
const tools_service_1 = require("./tools/tools.service");
const entities_module_1 = require("../entities/entities.module");
const login_service_1 = require("./admin/login/login.service");
const menus_service_1 = require("./admin/system/menus/menus.service");
const account_service_1 = require("./admin/system/account/account.service");
const upload_img_service_1 = require("./file/upload-img/upload-img.service");
const upload_excel_service_1 = require("./file/upload-excel/upload-excel.service");
const serviceList = [
    account_service_1.AccountService,
    upload_img_service_1.UploadImgService,
    upload_excel_service_1.UploadExcelService,
    tools_service_1.ToolsService,
    login_service_1.LoginService,
    menus_service_1.MenusService,
];
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    common_1.Module({
        imports: [entities_module_1.EntityModule],
        providers: [
            ...serviceList,
        ],
        exports: [...serviceList],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMseURBQXFEO0FBQ3JELGlFQUE2RDtBQUc3RCwrREFBMkQ7QUFFM0Qsc0VBQWtFO0FBRWxFLDRFQUF3RTtBQUd4RSw2RUFBb0Y7QUFDcEYsbUZBQThFO0FBQzlFLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLGdDQUFjO0lBRWQscUNBQWdCO0lBQ2hCLHlDQUFrQjtJQUNsQiw0QkFBWTtJQUdaLDRCQUFZO0lBRVosNEJBQVk7Q0FFYixDQUFDO0FBVUYsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQVQxQixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyw4QkFBWSxDQUFDO1FBRXZCLFNBQVMsRUFBRTtZQUNULEdBQUcsV0FBVztTQUVmO1FBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUM7S0FDMUIsQ0FBQztHQUNXLGNBQWMsQ0FBRztBQUFqQix3Q0FBYyJ9