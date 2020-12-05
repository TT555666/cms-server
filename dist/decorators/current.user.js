"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUser = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('request', request);
    if (data && request.user) {
        return request.user[data];
    }
    else {
        return request.user;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC51c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY29yYXRvcnMvY3VycmVudC51c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDJDQUF3RTtBQUUzRCxRQUFBLFdBQVcsR0FBRyw2QkFBb0IsQ0FDN0MsQ0FBQyxJQUFZLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3RDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyxDQUNGLENBQUMifQ==