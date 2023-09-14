import mysql, { ConnectionConfig, QueryFunction } from "mysql";
import {
  IMandatoryFields,
  transformJSON,
  validateColumns,
} from "./utilities/utility.js";
import chalk from "chalk";
import Messages from "./loggers/messages.js";
import { error, log } from "./loggers/index.js";

interface IIntializeTable {
  connectionLog?: boolean;
  tableName: string;
  disableLogs?: boolean;
  aliases?: IMandatoryFields;
}
interface IDatabaseConfig extends ConnectionConfig, IIntializeTable {}
interface IConnection {
  query: QueryFunction;
}

class Database {
  connection: IConnection = {} as IConnection;
  columns: Promise<IMandatoryFields | undefined>;
  constructor({
    host = "",
    user = "",
    database = "",
    password = "",
    tableName = "",
    aliases,
    disableLogs,
    connectionLog,
    ...others
  }: IDatabaseConfig) {
    this.connection = mysql.createConnection({
      host,
      user,
      database,
      password,
      ...others,
    });
    this.columns = this.initializeDatabase({
      tableName,
      aliases,
      connectionLog,
      disableLogs,
    });
  }
  /**
   *
   * @param querString pass mysql query as argument
   * @returns
   */
  private query(querString: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(querString, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  private async initializeDatabase({
    tableName = "",
    aliases = {} as IMandatoryFields,
    disableLogs = false,
    connectionLog = true,
  }: IIntializeTable) {
    const logsFlag = !disableLogs;
    try {
      if (connectionLog) {
        await this.query("select 1+1 as sum");
        log(chalk.green(Messages.DATABASE_CONNECTED));
      }
      if (tableName === "") {
        log(chalk.red(Messages.TABLE_NOT_PRESENT));
      } else {
        await this.query(`select * from ${tableName}`);
        logsFlag && log(chalk.green(Messages.TABLE_PRESENT));

        const data = await this.query(`show columns from ${tableName}`);
        return validateColumns(transformJSON(data), aliases, logsFlag);
      }
    } catch (e) {
      error(e);
    }
  }
}

export default Database;
