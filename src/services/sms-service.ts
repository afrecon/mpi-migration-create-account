import * as Logger from 'bunyan'
import { Twilio } from 'twilio'; 
import { LoggerFactory } from '../factories/logger-factory';
import { TwilioConfiguration } from '../models/configuration/twilio-configuration';

/**
 * Express specific implementation of an HTTP server
 */

class SmsService {
  /**
   * Logger for debugging and info
   */
  private readonly logger: Logger
  private client: Twilio

  constructor(protected twilioConfig: TwilioConfiguration, loggerFactory: LoggerFactory) {
    this.logger = loggerFactory.getNamedLogger('sms-service')
    this.client = new Twilio(twilioConfig.accountSid, twilioConfig.accountSecret)

  }

  public  async sendMessage(to: string, message: string) {
    try {
      const result = await this.client.messages.create({
        to,
        from: this.twilioConfig.phoneNumber,
        body: message,
      });
      this.logger.debug('Sms processed',result)
      return { success: true, result };
    } catch (error) {
      this.logger.error('Error sending sms',error)
      throw { success: false, code: error.code, message: error.message };
    }
  }

  public async sendOTP(to: string) {
    try {
      const result = await this.client.verify.services(this.twilioConfig.serviceSid)
        .verifications
        .create({ to, channel: 'sms' });

      return { success: true, result };
    } catch (error) {
      throw { success: false, code: error.code, message: error.message };
    }
  }

  public async verifyOTP(to: string, otp: string) {
    try {
      const result = await this.client.verify.services(this.twilioConfig.serviceSid)
        .verificationChecks
        .create({ to, code: otp });
      this.logger.debug('OO verification result',result)
      return { success: true, result };
    } catch (error) {
      this.logger.error('Error verifying OTP',error)
      throw { success: false, code: error.code, message: error.message };
    }
  }

}

export { SmsService }
