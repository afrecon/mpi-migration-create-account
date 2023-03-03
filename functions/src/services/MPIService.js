"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPIService = void 0;
const aws_sdk_1 = require("aws-sdk");
const XLSX = require("xlsx");
class MPIService {
    constructor(service, loggerFactory) {
        this.service = service;
        this.logger = loggerFactory.getNamedLogger('mpi-fetch-account-service');
    }
    async parseExcelFileInBatches(bucketName, filePath, batchSize, fileOutputQueue) {
        const s3 = new aws_sdk_1.S3();
        const s3Object = await s3.getObject({ Bucket: bucketName, Key: filePath }).promise();
        const workbook = XLSX.read(s3Object.Body);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const range = XLSX.utils.decode_range(worksheet['!ref']);
        const numRows = range.e.r + 1;
        const numBatches = Math.ceil(numRows / batchSize);
        const batches = [];
        for (let i = 0; i < numBatches; i++) {
            const startRow = i * batchSize;
            const endRow = Math.min(startRow + batchSize - 1, numRows - 1);
            const batchRange = XLSX.utils.encode_range({ s: { r: startRow, c: 0 }, e: { r: endRow, c: range.e.c } });
            const batchWorksheet = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: batchRange });
            const batchRows = batchWorksheet.slice(1).map((row) => {
                const obj = {};
                row.forEach((cellValue, index) => {
                    const key = batchWorksheet[0][index];
                    obj[key] = cellValue;
                });
                const message = JSON.stringify(obj);
                this.service.publish(fileOutputQueue, message);
                return obj;
            });
            batches.push(batchRows);
        }
        this.logger.debug('BATCHES', batches);
        return batches;
    }
}
exports.MPIService = MPIService;
