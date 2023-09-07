import { ConnectionConfig } from "mysql";
import chalk from "chalk";
import Database from "./database.js";
import { error, log } from "./loggers/index.js";
import {
  IMandatoryFields,
  transformJSON,
  validateColumns,
} from "./utilities/utility.js";
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
      log(
        `Database connected successfully. Timestamp: ${new Date().toUTCString()}`,
      );
    }
    if (tableName === "") {
      log(chalk.red("Please provide table name which stores user details."));
    } else {
      await dbInstance.query(`select * from ${tableName}`);
      logsFlag && log(chalk.green("Table exists."));

      const data = await dbInstance.query(`show columns from ${tableName}`);
      validateColumns(transformJSON(data), aliases);
    }
  } catch (e) {
    error(e);
  }
};

export default auth;
