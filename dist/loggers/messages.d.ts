interface IMesages {
    DATABASE_CONNECTED: string;
    TABLE_NOT_PRESENT: string;
    TABLE_PRESENT: string;
    REQUIRED_COLUMNS_PRESNT: string;
    COLUMNS_NOT_PRESENT: (validFields: object) => string;
}
declare const Messages: IMesages;
export default Messages;
