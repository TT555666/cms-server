"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimObject = exports.decodeObject = exports.channelObject = exports.fileObjectField = void 0;
const types_1 = require("../types");
const fileObjectField = (data) => {
    return Object.keys(data).reduce((cur, next) => {
        if (data[next] || /^\d+$/.test(data[next])) {
            cur[next] = data[next];
        }
        return cur;
    }, {});
};
exports.fileObjectField = fileObjectField;
const channelObject = (data) => {
    return exports.decodeObject(exports.fileObjectField(exports.trimObject(data)));
};
exports.channelObject = channelObject;
const decodeObject = (data) => {
    return Object.keys(data).reduce((cur, next) => {
        cur[next] = decodeURI(data[next]);
        return cur;
    }, {});
};
exports.decodeObject = decodeObject;
const trimObject = (data) => {
    return Object.keys(data).reduce((cur, next) => {
        cur[next] = isNaN(data[next]) ? data[next].trim() : data[next];
        return cur;
    }, {});
};
exports.trimObject = trimObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL29iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBd0M7QUFPakMsTUFBTSxlQUFlLEdBQUcsQ0FDN0IsSUFBeUIsRUFDSixFQUFFO0lBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUM7QUFUVyxRQUFBLGVBQWUsbUJBUzFCO0FBTUssTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFnQixFQUFjLEVBQUU7SUFDNUQsT0FBTyxvQkFBWSxDQUFDLHVCQUFlLENBQUMsa0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxhQUFhLGlCQUV4QjtBQU9LLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBeUIsRUFBYyxFQUFFO0lBQ3BFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUMsQ0FBQztBQUxXLFFBQUEsWUFBWSxnQkFLdkI7QUFNSyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQWdCLEVBQWMsRUFBRTtJQUN6RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBTFcsUUFBQSxVQUFVLGNBS3JCIn0=