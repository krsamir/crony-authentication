var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Database from "./database.js";
var auth = function (_a) {
    var _b = _a.connectionLog, connectionLog = _b === void 0 ? true : _b, config = __rest(_a, ["connectionLog"]);
    var dbInstance = new Database(__assign({}, config));
    if (connectionLog) {
        dbInstance
            .query("select 1+1 as sum")
            .then(function () {
            return console.log("Database connected successfully. Timestamp: ".concat(new Date().toUTCString()));
        })
            .catch(function (e) { return console.log(e); });
    }
};
export default auth;
