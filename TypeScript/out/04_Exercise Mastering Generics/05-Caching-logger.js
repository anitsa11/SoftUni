"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
class Logger {
    loggingFormat;
    cachedLogs = new Map();
    constructor(loggingFormat) {
        this.loggingFormat = loggingFormat;
    }
    getFormat() {
        return this.loggingFormat;
    }
    log(logLevel, message) {
        const date = new Date().toISOString();
        const logMessage = this.loggingFormat
            .replace("%level", logLevel)
            .replace("%date", date)
            .replace("%text", message);
        if (!this.cachedLogs.has(logLevel)) {
            this.cachedLogs.set(logLevel, []);
        }
        let cachedLogs = this.cachedLogs.get(logLevel);
        cachedLogs.push(logMessage);
        console.log(logMessage);
    }
}
let logger = new Logger(LoggingFormat.Standard);
logger.log(LoggingLevel.Info, "This is an info message.");
logger.log(LoggingLevel.Info, "Another message.");
logger.log(LoggingLevel.Error, "Something went wrong.");
logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
logger.log(LoggingLevel.Debug, "Running the debugger.");
console.log('-----------');
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'));
//# sourceMappingURL=05-Caching-logger.js.map