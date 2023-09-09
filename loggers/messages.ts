interface IMesages {
  DATABASE_CONNECTED: string;
  TABLE_NOT_PRESENT: string;
  TABLE_PRESENT: string;
  REQUIRED_COLUMNS_PRESNT: string;
  COLUMNS_NOT_PRESENT: (validFields: object) => string;
}

const Messages: IMesages = {} as IMesages;

Messages.DATABASE_CONNECTED = `Database connected successfully. Timestamp: ${new Date().toUTCString()}`;
Messages.TABLE_NOT_PRESENT = `Please provide table name which stores user details.`;
Messages.TABLE_PRESENT = "✅ Table exists.";
Messages.REQUIRED_COLUMNS_PRESNT = "✅ Required columns present.";
Messages.COLUMNS_NOT_PRESENT = (validFields) =>
  `Table should have following mandatory columns. ${validFields}. Please add and then proceed. You can also alias column name if your column name is different.`;

export default Messages;
