import { ConnectionConfig } from "mysql";
interface IAuth extends ConnectionConfig {
    connectionLog?: boolean;
}
declare const auth: ({ connectionLog, ...config }: IAuth) => void;
export default auth;
