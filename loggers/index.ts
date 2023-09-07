import chalk from "chalk";
import util from "util";

const log = console.log;

const error = (msg: string | object | unknown) =>
  log(chalk.red(util.inspect(msg, { colors: true })));

export { log, error };
