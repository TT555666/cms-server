"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersModule = void 0;
const common_1 = require("@nestjs/common");
const shared_module_1 = require("./shared/shared.module");
const admin_module_1 = require("./admin/admin.module");
let ControllersModule = class ControllersModule {
};
ControllersModule = __decorate([
    common_1.Module({
        imports: [admin_module_1.AdminModule, shared_module_1.SharedModule],
        exports: [admin_module_1.AdminModule, shared_module_1.SharedModule],
        controllers: [],
    })
], ControllersModule);
exports.ControllersModule = ControllersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsMERBQXNEO0FBQ3RELHVEQUFtRDtBQU9uRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBTDdCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLDBCQUFXLEVBQUUsNEJBQVksQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRCQUFZLENBQUM7UUFDcEMsV0FBVyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNXLGlCQUFpQixDQUFHO0FBQXBCLDhDQUFpQiJ9