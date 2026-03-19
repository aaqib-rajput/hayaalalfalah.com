import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4003,
  env: process.env.NODE_ENV || 'development',
  serviceName: 'prayer-event-service',
};
