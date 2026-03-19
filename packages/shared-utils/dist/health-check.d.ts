import { Response } from 'express';
export interface HealthStatus {
    status: 'ok' | 'error';
    service: string;
    timestamp: string;
    uptime: number;
    database?: 'connected' | 'disconnected';
    details?: Record<string, unknown>;
}
export declare function sendHealthCheck(res: Response, serviceName: string, dbStatus?: 'connected' | 'disconnected', details?: Record<string, unknown>): Response<any, Record<string, any>>;
//# sourceMappingURL=health-check.d.ts.map