/**
 * Representation of the twilio specific configuration required
 */
interface TwilioConfiguration {
  accountSid: string
  accountSecret: string
  phoneNumber: string
  serviceSid: string
  allowSMS: boolean
}

export { TwilioConfiguration }
