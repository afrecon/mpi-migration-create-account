import Logger = require('bunyan')

import {  Context, SQSEvent } from 'aws-lambda'
import { LoggerFactory } from './factories/logger-factory'
import { MPIService } from './services/MPIService'

class Controller {
  logger: Logger

  constructor(protected mpi:MPIService, loggerFactory: LoggerFactory) {
    this.logger = loggerFactory.getNamedLogger('mpi-migration-controller')
  }

  public async handler(request: SQSEvent, _ctx: Context): Promise<void> {
    const body = JSON.parse(request.Records[0].body)
    const tapError = (error: any) => {
      this.logger.error('ERROR: ', error)
      console.error('FATAL ERR',error)
      return
    }
 
    const returnResponse = async (result: any) => {
      this.logger.debug('Automation Successful',result)
      return
    }
   
    return this.mpi.createAccount(body)
    .then(returnResponse)
    .catch(tapError)
  }

}

export { Controller }
