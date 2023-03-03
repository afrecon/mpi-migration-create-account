import { AppConfiguration } from "../models/configuration/app-configuration"

require('dotenv')
  .config()


const configuration: AppConfiguration = {
  db: {
    url: process.env.DATABASE_URL as unknown as string,
    name: process.env.DATABASE_NAME as unknown as string,
    engine: process.env.DATABASE_ENGINE as unknown as string,
    port: process.env.DATABASE_PORT as unknown as number,
    username: process.env.DATABASE_USERNAME as unknown as string,
    password: process.env.DATABASE_PASSWORD as unknown as string
  },
  logger: {
    level: process.env.LOGGER_LEVEL as unknown as string,
    service: process.env.LOGGER_SERVICE as unknown as string,
    logglyToken: process.env.LOGGER_LOGGLY_TOKEN as unknown as string,
    logglySubdomain: process.env.LOGGER_LOGGLY_SUBDOMAIN as unknown as string
  },
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID as unknown as string,
    accountSecret: process.env.TWILIO_ACCOUNT_SECRET as unknown as string,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER as unknown as string,
    serviceSid: process.env.TWILIO_SERVICE_SID as unknown as string,
    allowSMS: process.env.SMS_NOTIFICATION_ENABLED as unknown as boolean
  }
  
}

export { configuration }
