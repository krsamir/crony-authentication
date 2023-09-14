import { ConnectionConfig } from "mysql";
import chalk from "chalk";
import Database from "./database.js";
import { error, log } from "./loggers/index.js";
import {
  IMandatoryFields,
  transformJSON,
  validateColumns,
} from "./utilities/utility.js";
import Messages from "./loggers/messages.js";
interface IAuth extends ConnectionConfig {
  connectionLog?: boolean;
  tableName: string;
  disableLogs?: boolean;
  aliases?: IMandatoryFields;
}
const auth = async ({
  connectionLog = true,
  tableName = "",
  disableLogs = false,
  aliases = {} as IMandatoryFields,
  ...config
}: IAuth) => {
  const logsFlag = !disableLogs;
  const dbInstance = new Database({
    ...config,
  });
  try {
    if (connectionLog) {
      await dbInstance.query("select 1+1 as sum");
      log(chalk.green(Messages.DATABASE_CONNECTED));
    }
    if (tableName === "") {
      log(chalk.red(Messages.TABLE_NOT_PRESENT));
    } else {
      await dbInstance.query(`select * from ${tableName}`);
      logsFlag && log(chalk.green(Messages.TABLE_PRESENT));

      const data = await dbInstance.query(`show columns from ${tableName}`);
      log(validateColumns(transformJSON(data), aliases, logsFlag));
    }
  } catch (e) {
    error(e);
  }
};

export default auth;
