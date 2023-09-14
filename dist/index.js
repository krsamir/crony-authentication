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
    var connectionLog = _a.connectionLog, tableName = _a.tableName, disableLogs = _a.disableLogs, aliases = _a.aliases, config = __rest(_a, ["connectionLog", "tableName", "disableLogs", "aliases"]);
    var dbInstance = new Database(__assign({ connectionLog: connectionLog, tableName: tableName, disableLogs: disableLogs, aliases: aliases }, config));
    return { columns: dbInstance.columns };
};
export default auth;
//# sourceMappingURL=index.js.map