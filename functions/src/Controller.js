"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(mpi, loggerFactory) {
        this.mpi = mpi;
        this.logger = loggerFactory.getNamedLogger('mpi-migration-controller');
    }
    async handler(request, _ctx) {
        console.log('INCOMING', request.Records);
        const body = JSON.parse(request.Records[0].body);
        const tapError = (error) => {
            this.logger.error('ERROR: ', error);
            console.error('FATAL ERR', error);
            return;
        };
        const returnResponse = async (result) => {
            this.logger.debug('Automation Successful', result);
            return;
        };
        return this.mpi.createAccount(body)
            .then(returnResponse)
            .catch(tapError);
    }
}
exports.Controller = Controller;
