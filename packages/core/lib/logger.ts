import winston from 'winston';
import type { Logger } from 'winston';

class NangoLogger {
    logger: Logger;

    constructor() {
        // File-based logger.
        this.logger = winston.createLogger({
            levels: winston.config.syslog.levels,
            format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize()),
            transports: [
                new winston.transports.File({ filename: '../../logs/error.log', level: 'error' }),
                new winston.transports.File({ filename: '../../logs/combined.log', level: 'info' })
            ]
        });

        // Console logger.
        if (process.env['NODE_ENV'] !== 'production') {
            this.logger.add(
                new winston.transports.Console({
                    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize()),
                    level: 'info' // Set to 'debug' for more verbosity, or 'info' for less verbosity.
                })
            );
        }
    }
}

export default new NangoLogger().logger;
