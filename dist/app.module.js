"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_config_1 = require("nestjs-config");
const path = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("./interceptors/logging/logging.interceptor");
const controllers_module_1 = require("./controllers/controllers.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_config_1.ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
                modifyConfigName: (name) => name.replace('.config', ''),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async (config) => ({
                    type: config.get('database.type'),
                    host: config.get('database.host'),
                    port: config.get('database.port'),
                    username: config.get('database.username'),
                    password: config.get('database.password'),
                    database: config.get('database.database'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    logging: config.get('database.logging'),
                    synchronize: true,
                    timezone: '+08:00',
                }),
                inject: [nestjs_config_1.ConfigService],
            }),
            controllers_module_1.ControllersModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxpREFBNEQ7QUFDNUQsNkJBQTZCO0FBQzdCLDZDQUFnRDtBQUNoRCx1Q0FBeUQ7QUFDekQsb0ZBQWdGO0FBRWhGLHlFQUFxRTtBQTJDckUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQUFHLENBQUE7QUFBWixTQUFTO0lBeENyQixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUU7WUFFUCw0QkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsRUFBRTtnQkFDeEUsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUN4RCxDQUFDO1lBRUYsdUJBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7b0JBQ2pDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztvQkFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7b0JBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO29CQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztvQkFFekMsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO29CQUMvQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDdkMsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQixDQUFDO2dCQUVGLE1BQU0sRUFBRSxDQUFDLDZCQUFhLENBQUM7YUFDeEIsQ0FBQztZQUNGLHNDQUFpQjtTQUNsQjtRQUNELFdBQVcsRUFBRSxFQUFFO1FBQ2YsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFlO2dCQUN4QixRQUFRLEVBQUUsd0NBQWtCO2FBQzdCO1lBRUQ7Z0JBQ0UsT0FBTyxFQUFFLGVBQVE7Z0JBRWpCLFFBQVEsRUFBRSx1QkFBYzthQUN6QjtTQUNGO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIn0=