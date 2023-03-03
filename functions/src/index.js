"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Controller_1 = require("./Controller");
require('dotenv').config();
const logger_factory_1 = require("./factories/logger-factory");
const SQSService_1 = require("./services/SQSService");
const MPIService_1 = require("./services/MPIService");
const region = (_a = process.env.AWS_REGION) !== null && _a !== void 0 ? _a : 'eu-west-2';
const loggerConfig = {
    logglySubdomain: (_b = process.env.LOGGLY_SUBDOMAIN) !== null && _b !== void 0 ? _b : 'info',
    logglyToken: (_c = process.env.LOGGLY_TOKEN) !== null && _c !== void 0 ? _c : 'info',
    level: (_d = process.env.LOG_LEVEL) !== null && _d !== void 0 ? _d : 'info',
    service: "mpi-mragration"
};
const loggerFactory = new logger_factory_1.LoggerFactory(loggerConfig);
const handler = async (request, ctx) => {
    const rootLogger = loggerFactory.getNamedLogger('MPI_MIGRATION_ROOT');
    rootLogger.info('Currently executing function [send invoice] in : ');
    const service = new SQSService_1.SQSService(region);
    const mpi = new MPIService_1.MPIService(service, loggerFactory);
    const controller = new Controller_1.Controller(mpi, loggerFactory);
    return controller.handler(request, ctx);
};
exports.handler = handler;
