"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQSService = void 0;
const aws_sdk_1 = require("aws-sdk");
class SQSService {
    constructor(region) {
        this.sqs = new aws_sdk_1.SQS({ region });
    }
    async publish(topic, body) {
        const params = {
            MessageBody: body,
            QueueUrl: topic
        };
        return this.sqs.sendMessage(params).promise().then((result) => {
            return result.MessageId;
        });
    }
}
exports.SQSService = SQSService;
