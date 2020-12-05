"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlQuery = void 0;
const url = require("url");
const getUrlQuery = (urlPath, key) => {
    const query = url.parse(urlPath, true).query;
    if (key) {
        return query[key];
    }
    else {
        return query;
    }
};
exports.getUrlQuery = getUrlQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBMkI7QUFFcEIsTUFBTSxXQUFXLEdBQUcsQ0FDekIsT0FBZSxFQUNmLEdBQVksRUFDc0IsRUFBRTtJQUNwQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQXFDLENBQUM7S0FDdkQ7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDLENBQUM7QUFWVyxRQUFBLFdBQVcsZUFVdEIifQ==