"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ValidationPipe = class ValidationPipe {
    async transform(value, metadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object);
        common_1.Logger.log(errors, 'validation.pipe处理');
        if (errors.length > 0) {
            const msg = Object.values(errors[0].constraints)[0];
            throw new common_1.HttpException({ message: msg }, common_1.HttpStatus.OK);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
ValidationPipe = __decorate([
    common_1.Injectable()
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BpcGUvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBT3dCO0FBQ3hCLHFEQUEyQztBQUMzQyx5REFBaUQ7QUFLakQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQVUsRUFBRSxRQUEwQjtRQUNwRCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxNQUFNLE1BQU0sR0FBRyxnQ0FBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBU3JCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBELE1BQU0sSUFBSSxzQkFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLG1CQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxVQUFVLENBQUMsUUFBYTtRQUM5QixNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQTtBQS9CWSxjQUFjO0lBRjFCLG1CQUFVLEVBQUU7R0FFQSxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyJ9