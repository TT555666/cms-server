"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemModule = void 0;
const common_1 = require("@nestjs/common");
const services_module_1 = require("../../../services/services.module");
const menus_controller_1 = require("./menus/menus.controller");
const login_controller_1 = require("./login/login.controller");
const account_controller_1 = require("./account/account.controller");
let SystemModule = class SystemModule {
};
SystemModule = __decorate([
    common_1.Module({
        imports: [services_module_1.ServicesModule],
        controllers: [
            menus_controller_1.MenusController,
            login_controller_1.LoginController,
            account_controller_1.AccountController,
        ],
    })
], SystemModule);
exports.SystemModule = SystemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zeXN0ZW0vc3lzdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsdUVBQStEO0FBSy9ELCtEQUEyRDtBQUMzRCwrREFBMkQ7QUFDM0QscUVBQWlFO0FBZ0JqRSxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFieEIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUN6QixXQUFXLEVBQUU7WUFJWCxrQ0FBZTtZQUVmLGtDQUFlO1lBQ2Ysc0NBQWlCO1NBRWxCO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FBRztBQUFmLG9DQUFZIn0=