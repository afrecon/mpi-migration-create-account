"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
const Logger = require("bunyan");
class LoggerFactory {
    constructor(configuration) {
        const options = {
            level: configuration.level,
            name: configuration.service,
        };
        this.logger = Logger.createLogger(options);
    }
    getNamedLogger(loggerName) {
        return this.logger.child({ loggerName });
    }
}
exports.LoggerFactory = LoggerFactory;
