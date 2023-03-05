import { SQS } from 'aws-sdk'
class SQSService {
    sqs: SQS
    constructor(region: string) {
        this.sqs = new SQS({ region })
    }

    public async publish(topic: string, body: string): Promise<unknown> {
        const params = {
            MessageBody: body,
            QueueUrl: topic
        };
        return this.sqs.sendMessage(params).promise().then((result) => {
            //console.log(result)
            return result.MessageId
        })
    }

}

export { SQSService }