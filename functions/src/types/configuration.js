"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
require('dotenv')
    .config();
const configuration = {
    db: {
        url: process.env.DATABASE_URL,
        name: process.env.DATABASE_NAME,
        engine: process.env.DATABASE_ENGINE,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
    },
    logger: {
        level: process.env.LOGGER_LEVEL,
        service: process.env.LOGGER_SERVICE,
        logglyToken: process.env.LOGGER_LOGGLY_TOKEN,
        logglySubdomain: process.env.LOGGER_LOGGLY_SUBDOMAIN
    },
    twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        accountSecret: process.env.TWILIO_ACCOUNT_SECRET,
        phoneNumber: process.env.TWILIO_PHONE_NUMBER,
        serviceSid: process.env.TWILIO_SERVICE_SID,
        allowSMS: process.env.SMS_NOTIFICATION_ENABLED
    }
};
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map