"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = createLogger;
const pino_1 = __importDefault(require("pino"));
const isDev = process.env.NODE_ENV !== 'production';
function createLogger(serviceName) {
    return (0, pino_1.default)({
        name: serviceName,
        level: process.env.LOG_LEVEL || (isDev ? 'debug' : 'info'),
        transport: isDev
            ? {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    translateTime: 'SYS:standard',
                    ignore: 'pid,hostname',
                },
            }
            : undefined,
        formatters: {
            level(label) {
                return { level: label };
            },
        },
        timestamp: pino_1.default.stdTimeFunctions.isoTime,
        base: {
            service: serviceName,
            env: process.env.NODE_ENV || 'development',
        },
    });
}
//# sourceMappingURL=logger.js.map