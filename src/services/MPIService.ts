
import { S3, SQS } from 'aws-sdk'
import Logger = require('bunyan');
import * as XLSX from 'xlsx';
import { LoggerFactory } from '../factories/logger-factory';
import { SQSService } from './SQSService';

interface ExcelRow {
  [key: string]: any;
}

class MPIService {
    logger: Logger

    constructor(protected service: SQSService, loggerFactory:LoggerFactory) {
        this.logger = loggerFactory.getNamedLogger('mpi-fetch-account-service')
    }

    async  parseExcelFileInBatches(
        bucketName: string,
        filePath: string,
        batchSize: number,
        fileOutputQueue: string,
      ): Promise<ExcelRow[][]> {
   
        const s3 = new S3({region:process.env.AWS_REGION ?? 'us-west-2'});
      
        const s3Object = await s3.getObject({ Bucket: bucketName, Key: filePath }).promise();
     
        const workbook = XLSX.read(s3Object.Body);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const range = XLSX.utils.decode_range(worksheet['!ref'] as string);
        const numRows = range.e.r + 1;
        const numBatches = Math.ceil(numRows / batchSize);
        const batches: ExcelRow[][] = [];
        for (let i = 0; i < numBatches; i++) {
          const startRow = i * batchSize;
          const endRow = Math.min(startRow + batchSize - 1, numRows - 1);
          const batchRange = XLSX.utils.encode_range({ s: { r: startRow, c: 0 }, e: { r: endRow, c: range.e.c } });
          const batchWorksheet:any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: batchRange });
          const batchRows = batchWorksheet.slice(1).map((row:any[]) => {
            const obj: ExcelRow = {};
            row.forEach((cellValue, index) => {
              const key = batchWorksheet[0][index];
              obj[key] = cellValue;
            });
            if(undefined!= obj['idNumber']){
                const message = JSON.stringify(obj)
                this.service.publish(fileOutputQueue,message)
            }
           
            return obj;
          });
          batches.push(batchRows);
        }
       this.logger.debug('BATCHES',batches)
        return batches;
      }
}

export { MPIService }