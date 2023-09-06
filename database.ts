import mysql, { ConnectionConfig, QueryFunction } from "mysql";

interface IDatabaseConfig extends ConnectionConfig {}
interface IConnection {
  query: QueryFunction;
}

class Database {
  connection: IConnection = {} as IConnection;

  constructor({ host, user, database, password, ...others }: IDatabaseConfig) {
    this.connection = mysql.createConnection({
      host,
      user,
      database,
      password,
      ...others,
    });
  }
  /**
   *
   * @param querString pass mysql query as argument
   * @returns
   */
  query(querString: string) {
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
}

export default Database;
