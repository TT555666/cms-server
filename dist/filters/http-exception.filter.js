"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        console.log('switchToHttp', ctx);
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception.message;
        let code = 1;
        try {
            const messageObj = JSON.parse(exception.message);
            message = messageObj.message;
            code = messageObj.code;
        }
        catch (e) { }
        common_1.Logger.log(exception, '错误提示');
        const errorResponse = {
            status,
            message,
            code,
            path: request.url,
            method: request.method,
            timestamp: new Date().toLocaleDateString(),
        };
        common_1.Logger.error(`【${utils_1.formatDate(Date.now())}】${request.method} ${request.url}`, JSON.stringify(errorResponse), 'HttpExceptionFilter');
        response.status(status);
        response.header('Content-Type', 'application/json; charset=utf-8');
        response.send(errorResponse);
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1leGNlcHRpb24uZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZpbHRlcnMvaHR0cC1leGNlcHRpb24uZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQU93QjtBQUV4QixvQ0FBc0M7QUFHdEMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDOUIsS0FBSyxDQUFDLFNBQXdCLEVBQUUsSUFBbUI7UUFDakQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsTUFBTSxNQUFNLEdBQ1YsU0FBUyxZQUFZLHNCQUFhO1lBQ2hDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLENBQUMsQ0FBQyxtQkFBVSxDQUFDLHFCQUFxQixDQUFDO1FBRXZDLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSTtZQUNGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLGVBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sYUFBYSxHQUFHO1lBQ3BCLE1BQU07WUFDTixPQUFPO1lBQ1AsSUFBSTtZQUNKLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRztZQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUU7U0FDM0MsQ0FBQztRQUVGLGVBQU0sQ0FBQyxLQUFLLENBQ1YsSUFBSSxrQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUM3QixxQkFBcUIsQ0FDdEIsQ0FBQztRQUVGLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUNuRSxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFBO0FBdENZLG1CQUFtQjtJQUQvQixjQUFLLEVBQUU7R0FDSyxtQkFBbUIsQ0FzQy9CO0FBdENZLGtEQUFtQiJ9