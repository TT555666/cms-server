"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const file_controller_1 = require("./file/file.controller");
const services_module_1 = require("../../services/services.module");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Module({
        imports: [services_module_1.ServicesModule],
        controllers: [file_controller_1.FileController],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsNERBQXdEO0FBQ3hELG9FQUErRDtBQU0vRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFKeEIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUN6QixXQUFXLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzlCLENBQUM7R0FDVyxZQUFZLENBQUc7QUFBZixvQ0FBWSJ9