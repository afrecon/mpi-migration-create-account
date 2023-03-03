import { SQS } from 'aws-sdk'
class SQSService {
    sqs: SQS
    constructor(region: string) {
        this.sqs = new SQS({ region, apiVersion: '2012-11-05' })
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