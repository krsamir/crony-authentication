var Messages = {};
Messages.DATABASE_CONNECTED = "Database connected successfully. Timestamp: ".concat(new Date().toUTCString());
Messages.TABLE_NOT_PRESENT = "Please provide table name which stores user details.";
Messages.TABLE_PRESENT = "✅ Table exists.";
Messages.REQUIRED_COLUMNS_PRESNT = "✅ Required columns present.";
Messages.COLUMNS_NOT_PRESENT = function (validFields) {
    return "Table should have following mandatory columns. ".concat(validFields, ". Please add and then proceed. You can also alias column name if your column name is different.");
};
export default Messages;
//# sourceMappingURL=messages.js.map