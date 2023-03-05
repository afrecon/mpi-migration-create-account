"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const twilio_1 = require("twilio");
class SmsService {
    constructor(twilioConfig, loggerFactory) {
        this.twilioConfig = twilioConfig;
        this.logger = loggerFactory.getNamedLogger('sms-service');
        this.client = new twilio_1.Twilio(twilioConfig.accountSid, twilioConfig.accountSecret);
    }
    async sendMessage(to, message) {
        try {
            const result = await this.client.messages.create({
                to,
                from: this.twilioConfig.phoneNumber,
                body: message,
            });
            this.logger.debug('Sms processed', result);
            return { success: true, result };
        }
        catch (error) {
            this.logger.error('Error sending sms', error);
            throw { success: false, code: error.code, message: error.message };
        }
    }
    async sendOTP(to) {
        try {
            const result = await this.client.verify.services(this.twilioConfig.serviceSid)
                .verifications
                .create({ to, channel: 'sms' });
            return { success: true, result };
        }
        catch (error) {
            throw { success: false, code: error.code, message: error.message };
        }
    }
    async verifyOTP(to, otp) {
        try {
            const result = await this.client.verify.services(this.twilioConfig.serviceSid)
                .verificationChecks
                .create({ to, code: otp });
            this.logger.debug('OO verification result', result);
            return { success: true, result };
        }
        catch (error) {
            this.logger.error('Error verifying OTP', error);
            throw { success: false, code: error.code, message: error.message };
        }
    }
}
exports.SmsService = SmsService;
//# sourceMappingURL=sms-service.js.map