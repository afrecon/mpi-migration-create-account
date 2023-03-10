
import { Controller } from "./Controller"
import { Context, SQSEvent } from 'aws-lambda'

require('dotenv').config()
import { LoggerFactory } from "./factories/logger-factory"
import { LoggerConfiguration } from "./models/configuration/logger-configuration"
//import { DatabaseConnectionFactory } from "./factories/database-connection-factory"
//import { configuration } from "./types/configuration"
import { MPIService } from "./services/MPIService"
import { DatabaseConnectionFactory } from "./factories/database-connection-factory"
import { configuration } from "./types/configuration"
import { SmsService } from "./services/sms-service"
import { S3 } from "aws-sdk"

import * as admin from 'firebase-admin' 
 
const region = process.env.AWS_REGION ?? 'us-west-2'
const env = process.env.ENV ?? 'us-west-2'
const bucket = process.env.FIREBASE_BUCKET ?? 'mpi-migration'
const loggerConfig: LoggerConfiguration = {
  logglySubdomain: process.env.LOGGLY_SUBDOMAIN ?? 'info',
  logglyToken: process.env.LOGGLY_TOKEN ?? 'info',
  level: process.env.LOG_LEVEL ?? 'info',
  service: "mpi-mragration"
}
const loggerFactory = new LoggerFactory(loggerConfig)

 
export const handler = async (request: SQSEvent, ctx: Context): Promise<void> => {
  const s3 = new S3({region});
      
  const s3Object = await s3.getObject({ Bucket: bucket, Key: `${env}.json` }).promise();
  const firebase = admin.initializeApp({
    credential: admin.credential.cert(s3Object.Body as string),
    storageBucket:process.env.STORAGE_BUCKET
  });

  const auth = firebase.auth()
  const rootLogger = loggerFactory.getNamedLogger('MPI_MIGRATION_ROOT')
  rootLogger.info('Currently executing function [send invoice] in : ')
 // Database
 const database = await DatabaseConnectionFactory.getInstance(configuration.db).initialize()
  const sms = new SmsService(configuration.twilio,loggerFactory)

   const mpi = new MPIService(database,sms,auth,loggerFactory)
  const controller = new Controller(mpi,loggerFactory)
  return controller.handler(request, ctx)
}
