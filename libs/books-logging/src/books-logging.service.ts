import { Injectable, LoggerService, LogLevel } from '@nestjs/common';
import { winstonLogger } from './books-logging.config';

@Injectable()
export class BooksLoggingService implements LoggerService {
  log(message: string) {
    winstonLogger.info(message);
  }

  error(message: string, trace: string) {
    winstonLogger.error(message, { trace });
  }

  warn(message: string) {
    winstonLogger.warn(message);
  }

  debug(message: string) {
    winstonLogger.debug(message);
  }

  verbose(message: string) {
    winstonLogger.verbose(message);
  }
  fatal?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  setLogLevels?(levels: LogLevel[]) {
    throw new Error('Method not implemented.');
  }
}
