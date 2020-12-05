"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const path = require("path");
const rateLimit = require("express-rate-limit");
const admin_config_1 = require("./config/admin.config");
const helmet = require("helmet");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const transform_interceptor_1 = require("./interceptors/transform/transform.interceptor");
const requestIp = require("request-ip");
const common_1 = require("@nestjs/common");
const PREFIX = process.env.PREFIX || '';
const PORT = process.env.PORT || 7002;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix(PREFIX);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('nest api文档')
        .setDescription('nest api接口文档')
        .setBasePath(PREFIX)
        .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
        .setVersion('0.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(`${PREFIX}/docs`, app, document);
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 500,
    }));
    app.useStaticAssets(path.join(__dirname, '..', 'public'), {
        prefix: admin_config_1.default.staticPrefixPath,
    });
    app.use(helmet());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.use(requestIp.mw());
    await app.listen(PORT, () => {
        common_1.Logger.log(`服务器启动成功请访问:http://localhost:${PORT}/${PREFIX}`);
    });
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXVCO0FBQ3ZCLHVDQUEyQztBQUMzQyw2Q0FBeUM7QUFFekMsNkNBQWlFO0FBQ2pFLDZCQUE2QjtBQUM3QixnREFBZ0Q7QUFDaEQsd0RBQWdEO0FBQ2hELGlDQUFpQztBQUNqQywyRUFBc0U7QUFDdEUsMEZBQXNGO0FBQ3RGLHdDQUF3QztBQUN4QywyQ0FBd0M7QUFFeEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN0QyxLQUFLLFVBQVUsU0FBUztJQUV0QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUF5QixzQkFBUyxDQUFDLENBQUM7SUFFeEUsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSx5QkFBZSxFQUFFO1NBQ2xDLFFBQVEsQ0FBQyxZQUFZLENBQUM7U0FDdEIsY0FBYyxDQUFDLGNBQWMsQ0FBQztTQUM5QixXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ25CLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDOUQsVUFBVSxDQUFDLE9BQU8sQ0FBQztTQUNuQixLQUFLLEVBQUUsQ0FBQztJQUNYLE1BQU0sUUFBUSxHQUFHLHVCQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCx1QkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVyRCxHQUFHLENBQUMsR0FBRyxDQUNMLFNBQVMsQ0FBQztRQUNSLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7UUFDeEIsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDLENBQ0gsQ0FBQztJQUVGLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1FBQ3hELE1BQU0sRUFBRSxzQkFBVyxDQUFDLGdCQUFnQjtLQUNyQyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFbEIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksMkNBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBRWhELEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLDRDQUFvQixFQUFFLENBQUMsQ0FBQztJQUV0RCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQzFCLGVBQU0sQ0FBQyxHQUFHLENBQUMsK0JBQStCLElBQUksSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDIn0=