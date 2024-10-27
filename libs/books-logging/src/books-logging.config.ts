import * as winston from 'winston';
import {
  ElasticsearchTransport,
  ElasticsearchTransportOptions,
} from 'winston-elasticsearch';

const esTransportOptions: ElasticsearchTransportOptions = {
  level: 'info',
  clientOpts: { node: process.env.ELASTIC_URL }, // Elasticsearch URL
  indexPrefix: process.env.ELASTIC_INDEX,
};

export const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    new ElasticsearchTransport(esTransportOptions),
  ],
});
