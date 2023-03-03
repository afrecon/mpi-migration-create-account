
import { LoggerConfiguration } from './logger-configuration'
import { DatabaseConfiguration } from './database-configuration'
import { TwilioConfiguration } from './twilio-configuration'

/**
 * Representation of the application level configuration object
 */
interface AppConfiguration {
  db: DatabaseConfiguration
  logger: LoggerConfiguration
  twilio: TwilioConfiguration
}

export { AppConfiguration }
