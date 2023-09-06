import { ConnectionConfig } from "mysql";
import Database from "./database.js";

interface IAuth extends ConnectionConfig {
  connectionLog?: boolean;
}
const auth = ({ connectionLog = true, ...config }: IAuth) => {
  const dbInstance = new Database({
    ...config,
  });
  if (connectionLog) {
    dbInstance
      .query("select 1+1 as sum")
      .then(() =>
        console.log(
          `Database connected successfully. Timestamp: ${new Date().toUTCString()}`,
        ),
      )
      .catch((e) => console.log(e));
  }
};

export default auth;
