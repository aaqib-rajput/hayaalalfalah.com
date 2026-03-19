import express from 'express';
import cors from 'cors';
import { config } from './config';
import communityRoutes from './routes/community.routes';
import { createLogger, createErrorHandler, sendHealthCheck } from '@mosqueconnect/shared-utils';

const logger = createLogger(config.serviceName);
const app = express();

app.use(cors());
app.use(express.json());

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
app.use('/api', communityRoutes);

// Error Handling
app.use(createErrorHandler(logger));

app.listen(config.port, () => {
  logger.info(`Community service listening at http://localhost:${config.port}`);
});
