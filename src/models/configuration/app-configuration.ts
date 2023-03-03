
import { LoggerConfiguration } from './logger-configuration'
import { DatabaseConfiguration } from './database-configuration'

/**
 * Representation of the application level configuration object
 */
interface AppConfiguration {
  db: DatabaseConfiguration
  logger: LoggerConfiguration
}

export { AppConfiguration }
