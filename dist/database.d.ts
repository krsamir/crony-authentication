import { ConnectionConfig, QueryFunction } from "mysql";
interface IDatabaseConfig extends ConnectionConfig {
}
interface IConnection {
    query: QueryFunction;
}
declare class Database {
    connection: IConnection;
    constructor({ host, user, database, password, ...others }: IDatabaseConfig);
    /**
     *
     * @param querString pass mysql query as argument
     * @returns
     */
    query(querString: string): Promise<unknown>;
}
export default Database;
