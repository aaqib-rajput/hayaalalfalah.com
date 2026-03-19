import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4001,
  env: process.env.NODE_ENV || 'development',
  serviceName: 'identity-service',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  authCookieName: process.env.AUTH_COOKIE_NAME || 'mc_access_token',
  authCookieMaxAgeMs: Number(process.env.AUTH_COOKIE_MAX_AGE_MS || 1000 * 60 * 60 * 24),
};
