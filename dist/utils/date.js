"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const moment = require("moment");
const formatDate = (dateNum, isDue = false) => {
    if (!/^\d+$/.test(dateNum.toString())) {
        throw new TypeError(`${dateNum}传递的数据格式化错误`);
    }
    if (isDue) {
        return moment(dateNum).format('YYYY-MM-DD');
    }
    else {
        return moment(dateNum).format('YYYY-MM-DD HH:mm:ss');
    }
};
exports.formatDate = formatDate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQVExQixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQXdCLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBVSxFQUFFO0lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxPQUFPLFlBQVksQ0FBQyxDQUFDO0tBQzdDO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDN0M7U0FBTTtRQUNMLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3REO0FBQ0gsQ0FBQyxDQUFDO0FBVFcsUUFBQSxVQUFVLGNBU3JCIn0=