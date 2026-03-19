import { Response } from 'express';

export interface HealthStatus {
  status: 'ok' | 'error';
  service: string;
  timestamp: string;
  uptime: number;
  database?: 'connected' | 'disconnected';
  details?: Record<string, unknown>;
}

export function sendHealthCheck(
  res: Response,
  serviceName: string,
  dbStatus?: 'connected' | 'disconnected',
  details?: Record<string, unknown>
) {
  const status: HealthStatus = {
    status: dbStatus === 'disconnected' ? 'error' : 'ok',
    service: serviceName,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStatus,
    details,
  };

  const statusCode = status.status === 'ok' ? 200 : 503;
  return res.status(statusCode).json(status);
}
