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
export var validateColumns = function (arr, aliases) {
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
        var value = _a[1];
        return value;
    });
    var fields = arr.map(function (_a) {
        var Field = _a.Field;
        return Field === null || Field === void 0 ? void 0 : Field.toLowerCase();
    });
    var result = validFields.every(function (val) { return fields.includes(val); });
    if (!result) {
        throw Error("Table should have following mandatory columns. ".concat(validFields, ". Please add and then proceed. You can also alias column name if your column name is different."));
    }
    return mandatoryColumns;
};
