import express from 'express';
import cors from 'cors';
import { config } from './config';
import notificationRoutes from './routes/notification.routes';
import { createLogger, createErrorHandler, sendHealthCheck, EventBus, type Event } from '@mosqueconnect/shared-utils';

import { broadcastNotification } from './controllers/sse.controller';

const logger = createLogger(config.serviceName);
const app = express();
const eventBus = new EventBus();

app.use(cors());
app.use(express.json());

// Event Bus Subscriptions
eventBus.subscribe('MOSQUE_CREATED', (event: Event) => {
  logger.info({ event }, 'Handling MOSQUE_CREATED event');
  const payload = event.payload as any;
  broadcastNotification({ type: 'MOSQUE_CREATED', message: `A new mosque was created: ${payload.name}` });
});

eventBus.subscribe('USER_REGISTERED', (event: Event) => {
  logger.info({ event }, 'Handling USER_REGISTERED event');
  const payload = event.payload as any;
  broadcastNotification({ type: 'USER_REGISTERED', message: `Welcome ${payload.name}!` });
});

// Request logging middleware
app.use((req, _res, next) => {
  logger.info({ method: req.method, url: req.url }, 'Incoming request');
  next();
});

// Health check
app.get('/health', async (_req, res) => {
  try {
    // Basic ping could be added here
    sendHealthCheck(res, config.serviceName, 'connected');
  } catch (err) {
    sendHealthCheck(res, config.serviceName, 'disconnected');
  }
});

// API Routes
app.use('/api/notifications', notificationRoutes);

// Error Handling
app.use(createErrorHandler(logger));

app.listen(config.port, () => {
  logger.info(`Notification service listening at http://localhost:${config.port}`);
});
