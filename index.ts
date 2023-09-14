import { ConnectionConfig } from "mysql";
import Database from "./database.js";
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

const auth = ({
  connectionLog,
  tableName,
  disableLogs,
  aliases,
  ...config
}: IAuth): IAuthReturnTypes => {
  const dbInstance = new Database({
    connectionLog,
    tableName,
    disableLogs,
    aliases,
    ...config,
  });
  return { columns: dbInstance.columns };
};

export default auth;
