import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4004,
  env: process.env.NODE_ENV || 'development',
  serviceName: 'community-service',
};
