import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.NOTIFICATION_SERVICE_PORT || 4008,
  serviceName: 'notification-service',
  env: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
  smtp: {
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '1025', 10),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};
