import { Injectable, LoggerService, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { winstonLogger } from './books-logging.config';

@Injectable()
export class BooksLoggingService implements LoggerService {
  constructor(private readonly configService: ConfigService) {}

  private prepareLogDetail() {
    return {
      service: this.configService.get('APP_NAME'),
    };
  }

  log(message: string) {
    winstonLogger.info(message, { ...this.prepareLogDetail() });
  }

  error(message: string, trace: string) {
    winstonLogger.error(message, { trace, ...this.prepareLogDetail() });
  }

  warn(message: string) {
    winstonLogger.warn(message, { ...this.prepareLogDetail() });
  }

  debug(message: string) {
    winstonLogger.debug(message, { ...this.prepareLogDetail() });
  }

  verbose(message: string) {
    winstonLogger.verbose(message, { ...this.prepareLogDetail() });
  }
}
