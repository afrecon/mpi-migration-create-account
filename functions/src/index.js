"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Controller_1 = require("./Controller");
require('dotenv').config();
const logger_factory_1 = require("./factories/logger-factory");
const MPIService_1 = require("./services/MPIService");
const database_connection_factory_1 = require("./factories/database-connection-factory");
const configuration_1 = require("./types/configuration");
const sms_service_1 = require("./services/sms-service");
const aws_sdk_1 = require("aws-sdk");
const admin = __importStar(require("firebase-admin"));
const region = (_a = process.env.AWS_REGION) !== null && _a !== void 0 ? _a : 'us-west-2';
const env = (_b = process.env.ENV) !== null && _b !== void 0 ? _b : 'us-west-2';
const bucket = (_c = process.env.FIREBASE_BUCKET) !== null && _c !== void 0 ? _c : 'mpi-migration';
const loggerConfig = {
    logglySubdomain: (_d = process.env.LOGGLY_SUBDOMAIN) !== null && _d !== void 0 ? _d : 'info',
    logglyToken: (_e = process.env.LOGGLY_TOKEN) !== null && _e !== void 0 ? _e : 'info',
    level: (_f = process.env.LOG_LEVEL) !== null && _f !== void 0 ? _f : 'info',
    service: "mpi-mragration"
};
const loggerFactory = new logger_factory_1.LoggerFactory(loggerConfig);
const handler = async (request, ctx) => {
    const s3 = new aws_sdk_1.S3({ region });
    const s3Object = await s3.getObject({ Bucket: bucket, Key: `${env}.json` }).promise();
    const firebase = admin.initializeApp({
        credential: admin.credential.cert(s3Object.Body),
        storageBucket: process.env.STORAGE_BUCKET
    });
    const auth = firebase.auth();
    const rootLogger = loggerFactory.getNamedLogger('MPI_MIGRATION_ROOT');
    rootLogger.info('Currently executing function [send invoice] in : ');
    const database = await database_connection_factory_1.DatabaseConnectionFactory.getInstance(configuration_1.configuration.db).initialize();
    const sms = new sms_service_1.SmsService(configuration_1.configuration.twilio, loggerFactory);
    const mpi = new MPIService_1.MPIService(database, sms, auth, loggerFactory);
    const controller = new Controller_1.Controller(mpi, loggerFactory);
    return controller.handler(request, ctx);
};
exports.handler = handler;
//# sourceMappingURL=index.js.map