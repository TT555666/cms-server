"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        const url = request.url;
        const now = Date.now();
        return next.handle().pipe(operators_1.tap(() => {
            common_1.Logger.log(`${method} ${url} ${Date.now() - now}ms`, context.getClass().name);
        }));
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcmNlcHRvcnMvbG9nZ2luZy9sb2dnaW5nLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQU13QjtBQUV4Qiw4Q0FBcUM7QUFJckMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDOUIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUN2QixlQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsZUFBTSxDQUFDLEdBQUcsQ0FDUixHQUFHLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUN4QyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUN4QixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBZlksa0JBQWtCO0lBRjlCLG1CQUFVLEVBQUU7R0FFQSxrQkFBa0IsQ0FlOUI7QUFmWSxnREFBa0IifQ==