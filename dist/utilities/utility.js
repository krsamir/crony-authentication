import chalk from "chalk";
import { log } from "../loggers/index.js";
import Messages from "../loggers/messages.js";
export var transformJSON = function (value) {
    return JSON.parse(JSON.stringify(value));
};
var COLUMNS = [
    "id",
    "name",
    "password",
    "email",
    "token",
    "expiry",
    "isactive",
];
export var validateColumns = function (arr, aliases, logsFlag) {
    var mandatoryColumns = Object.fromEntries(COLUMNS.map(function (keys) {
        return Object.entries(aliases).map(function (_a) {
            var key = _a[0], value = _a[1];
            if (key === keys) {
                return value;
            }
            else {
                return keys;
            }
        });
    }));
    var validFields = Object.entries(mandatoryColumns).map(function (_a) {
        var key = _a[0];
        return key;
    });
    var fields = arr.map(function (_a) {
        var Field = _a.Field;
        return Field === null || Field === void 0 ? void 0 : Field.toLowerCase();
    });
    var result = validFields.every(function (val) { return fields.includes(val); });
    if (!result) {
        throw Error(Messages.COLUMNS_NOT_PRESENT(validFields));
    }
    logsFlag && log(chalk.green(Messages.REQUIRED_COLUMNS_PRESNT));
    return mandatoryColumns;
};
//# sourceMappingURL=utility.js.map