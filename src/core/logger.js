import logger from 'debug'
logger.enable('app:*')

const loggerList = {}

export default function getLogger (loggerName) {
  if (loggerList[loggerName] === undefined) {
    loggerList[loggerName] = logger(loggerName)
  }
  return loggerList[loggerName]
} // end getLogger
