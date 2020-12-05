"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const system_module_1 = require("./system/system.module");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    common_1.Module({
        imports: [system_module_1.SystemModule],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL2FkbWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsMERBQXNEO0FBSXRELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRyxDQUFBO0FBQWQsV0FBVztJQUh2QixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyxXQUFXLENBQUc7QUFBZCxrQ0FBVyJ9