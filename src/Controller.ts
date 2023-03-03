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
    const bucket = process.env.FILE_BUCKET as unknown as string 
    const path = process.env.FILE_PATH as unknown as string
    const batchSize = process.env.BATCH_SIZE as unknown as number
    const outputQueue = process.env.FILE_OUTPUT_QUEUE as unknown as string

    const tapError = (error: any) => {
      this.logger.error('ERROR: ', error)
      return
    }
 
    const returnResponse = async (result: any) => {
      this.logger.debug('Automation Successful',result)
      return
    }
   
    return this.mpi.parseExcelFileInBatches(bucket,path,batchSize,outputQueue)
    .then(returnResponse)
    .catch(tapError)
  }

}

export { Controller }
