import Redis from 'ioredis';
import { createLogger } from './logger';

const logger = createLogger('event-bus');

export interface Event<T = unknown> {
  type: string;
  payload: T;
  service: string;
  timestamp: string;
}

export class EventBus {
  private publisher: Redis;
  private subscriber: Redis;

  constructor(redisUrl: string = process.env.REDIS_URL || 'redis://localhost:6379') {
    this.publisher = new Redis(redisUrl);
    this.subscriber = new Redis(redisUrl);

    this.publisher.on('error', (err) => logger.error({ err }, 'Redis Publisher Error'));
    this.subscriber.on('error', (err) => logger.error({ err }, 'Redis Subscriber Error'));
  }

  async publish<T>(type: string, payload: T, serviceName: string) {
    const event: Event<T> = {
      type,
      payload,
      service: serviceName,
      timestamp: new Date().toISOString(),
    };

    try {
      await this.publisher.publish(type, JSON.stringify(event));
      logger.info({ type, serviceName }, 'Event published');
    } catch (err) {
      logger.error({ err, type, serviceName }, 'Failed to publish event');
      throw err;
    }
  }

  async subscribe<T>(type: string, handler: (event: Event<T>) => void) {
    await this.subscriber.subscribe(type);
    
    this.subscriber.on('message', (channel, message) => {
      if (channel === type) {
        try {
          const event: Event<T> = JSON.parse(message);
          handler(event);
        } catch (err) {
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
