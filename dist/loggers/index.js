import chalk from "chalk";
import util from "util";
var log = console.log;
var error = function (msg) {
    return log(chalk.red(util.inspect(msg, { colors: true })));
};
export { log, error };
//# sourceMappingURL=index.js.map