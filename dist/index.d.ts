import { ConnectionConfig } from "mysql";
import { IMandatoryFields } from "./utilities/utility.js";
interface IAuth extends ConnectionConfig {
    connectionLog?: boolean;
    tableName: string;
    disableLogs?: boolean;
    aliases?: IMandatoryFields;
}
declare const auth: ({ connectionLog, tableName, disableLogs, aliases, ...config }: IAuth) => Promise<void>;
export default auth;
