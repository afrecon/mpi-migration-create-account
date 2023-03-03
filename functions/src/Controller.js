"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(mpi, loggerFactory) {
        this.mpi = mpi;
        this.logger = loggerFactory.getNamedLogger('mpi-migration-controller');
    }
    async handler(request, _ctx) {
        const bucket = process.env.FILE_BUCKET;
        const path = process.env.FILE_PATH;
        const batchSize = process.env.BATCH_SIZE;
        const outputQueue = process.env.FILE_OUTPUT_QUEUE;
        const tapError = (error) => {
            this.logger.error('ERROR: ', error);
            return;
        };
        const returnResponse = async (result) => {
            this.logger.debug('Automation Successful', result);
            return;
        };
        return this.mpi.parseExcelFileInBatches(bucket, path, batchSize, outputQueue)
            .then(returnResponse)
            .catch(tapError);
    }
}
exports.Controller = Controller;
