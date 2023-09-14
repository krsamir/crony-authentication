import { ConnectionConfig, QueryFunction } from "mysql";
import { IMandatoryFields } from "./utilities/utility.js";
interface IIntializeTable {
    connectionLog?: boolean;
    tableName: string;
    disableLogs?: boolean;
    aliases?: IMandatoryFields;
}
interface IDatabaseConfig extends ConnectionConfig, IIntializeTable {
}
interface IConnection {
    query: QueryFunction;
}
declare class Database {
    connection: IConnection;
    columns: Promise<IMandatoryFields | undefined>;
    constructor({ host, user, database, password, tableName, aliases, disableLogs, connectionLog, ...others }: IDatabaseConfig);
    /**
     *
     * @param querString pass mysql query as argument
     * @returns
     */
    private query;
    private initializeDatabase;
}
export default Database;
