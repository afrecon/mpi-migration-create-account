
import { Controller } from "./Controller"
import { Context, SQSEvent } from 'aws-lambda'

require('dotenv').config()
import { LoggerFactory } from "./factories/logger-factory"
import { LoggerConfiguration } from "./models/configuration/logger-configuration"
//import { DatabaseConnectionFactory } from "./factories/database-connection-factory"
//import { configuration } from "./types/configuration"
import { SQSService } from "./services/SQSService"
import { MPIService } from "./services/MPIService"


 
const region = process.env.AWS_REGION ?? 'us-west-2'
const loggerConfig: LoggerConfiguration = {
  logglySubdomain: process.env.LOGGLY_SUBDOMAIN ?? 'info',
  logglyToken: process.env.LOGGLY_TOKEN ?? 'info',
  level: process.env.LOG_LEVEL ?? 'info',
  service: "mpi-mragration"
}
const loggerFactory = new LoggerFactory(loggerConfig)

 
export const handler = async (request: SQSEvent, ctx: Context): Promise<void> => {
  const rootLogger = loggerFactory.getNamedLogger('MPI_MIGRATION_ROOT')
  rootLogger.info('Currently executing function [send invoice] in : ')
 // Database
// const database = await DatabaseConnectionFactory.getInstance(configuration.db).initialize()
  
   const service:SQSService = new SQSService(region)
   const mpi = new MPIService(service,loggerFactory)
  const controller = new Controller(mpi,loggerFactory)
  return controller.handler(request, ctx)
}
