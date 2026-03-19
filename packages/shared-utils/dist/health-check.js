"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendHealthCheck = sendHealthCheck;
function sendHealthCheck(res, serviceName, dbStatus, details) {
    const status = {
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
//# sourceMappingURL=health-check.js.map