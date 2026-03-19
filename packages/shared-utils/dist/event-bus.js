"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const logger_1 = require("./logger");
const logger = (0, logger_1.createLogger)('event-bus');
class EventBus {
    publisher;
    subscriber;
    constructor(redisUrl = process.env.REDIS_URL || 'redis://localhost:6379') {
        this.publisher = new ioredis_1.default(redisUrl);
        this.subscriber = new ioredis_1.default(redisUrl);
        this.publisher.on('error', (err) => logger.error({ err }, 'Redis Publisher Error'));
        this.subscriber.on('error', (err) => logger.error({ err }, 'Redis Subscriber Error'));
    }
    async publish(type, payload, serviceName) {
        const event = {
            type,
            payload,
            service: serviceName,
            timestamp: new Date().toISOString(),
        };
        try {
            await this.publisher.publish(type, JSON.stringify(event));
            logger.info({ type, serviceName }, 'Event published');
        }
        catch (err) {
            logger.error({ err, type, serviceName }, 'Failed to publish event');
            throw err;
        }
    }
    async subscribe(type, handler) {
        await this.subscriber.subscribe(type);
        this.subscriber.on('message', (channel, message) => {
            if (channel === type) {
                try {
                    const event = JSON.parse(message);
                    handler(event);
                }
                catch (err) {
                    logger.error({ err, type }, 'Failed to process event message');
                }
            }
        });
        logger.info({ type }, 'Subscribed to event');
    }
    async disconnect() {
        await this.publisher.quit();
        await this.subscriber.quit();
    }
}
exports.EventBus = EventBus;
//# sourceMappingURL=event-bus.js.map