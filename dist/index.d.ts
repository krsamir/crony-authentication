import { ConnectionConfig } from "mysql";
import { IMandatoryFields } from "./utilities/utility.js";
interface IAuth extends ConnectionConfig {
    connectionLog?: boolean;
    tableName: string;
    disableLogs?: boolean;
    aliases?: IMandatoryFields;
}
interface IAuthReturnTypes {
    columns: Promise<IMandatoryFields | undefined>;
}
declare const auth: ({ connectionLog, tableName, disableLogs, aliases, ...config }: IAuth) => IAuthReturnTypes;
export default auth;
