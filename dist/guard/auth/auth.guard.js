"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const utils_1 = require("../../utils");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = context.switchToRpc().getData().headers.token ||
            context.switchToHttp().getRequest().body.token ||
            utils_1.getUrlQuery(request.url, 'token');
        common_1.Logger.log(`当前的token: ${token}`, 'AuthGuard');
        common_1.Logger.log(`switchToRpc是:${context.switchToRpc()}`);
        if (token) {
            try {
                const user = await this.verifyToken(token, process.env.SECRET);
                if (user) {
                    request.user = user;
                    return true;
                }
                else {
                    throw new common_1.HttpException(JSON.stringify({ message: 'token失效', code: 10042 }), common_1.HttpStatus.OK);
                }
            }
            catch (e) {
                common_1.Logger.error(e, 'auth');
                throw new common_1.HttpException(JSON.stringify({ message: 'token失效', code: 10042 }), common_1.HttpStatus.OK);
            }
        }
        else {
            throw new common_1.HttpException('你还没登录,请先登录', common_1.HttpStatus.OK);
        }
    }
    verifyToken(token, secret) {
        return new Promise((resolve) => {
            jwt.verify(token, secret, (error, payload) => {
                if (error) {
                    console.log('-----------error start--------------');
                    console.log(error);
                    console.log('-----------error end--------------');
                    throw new common_1.HttpException('token不合法', common_1.HttpStatus.OK);
                }
                else {
                    resolve(payload);
                }
            });
        });
    }
};
AuthGuard = __decorate([
    common_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ndWFyZC9hdXRoL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBT3dCO0FBQ3hCLG9DQUFvQztBQUNwQyx1Q0FBeUM7QUFJekMsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNwQixLQUFLLENBQUMsV0FBVyxDQUFDLE9BQXlCO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwRCxNQUFNLEtBQUssR0FDVCxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDN0MsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQzlDLG1CQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxlQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLElBQUksRUFBRTtvQkFDUixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDcEIsT0FBTyxJQUFJLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUNuRCxtQkFBVSxDQUFDLEVBQUUsQ0FDZCxDQUFDO2lCQUNIO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixlQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxJQUFJLHNCQUFhLENBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUNuRCxtQkFBVSxDQUFDLEVBQUUsQ0FDZCxDQUFDO2FBQ0g7U0FDRjthQUFNO1lBQ0wsTUFBTSxJQUFJLHNCQUFhLENBQUMsWUFBWSxFQUFFLG1CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWEsRUFBRSxNQUFjO1FBQy9DLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksS0FBSyxFQUFFO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO29CQUNsRCxNQUFNLElBQUksc0JBQWEsQ0FBQyxVQUFVLEVBQUUsbUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQS9DWSxTQUFTO0lBRnJCLG1CQUFVLEVBQUU7R0FFQSxTQUFTLENBK0NyQjtBQS9DWSw4QkFBUyJ9