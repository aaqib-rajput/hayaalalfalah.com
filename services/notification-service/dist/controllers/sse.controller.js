"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastNotification = exports.sseHandler = void 0;
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const logger = (0, shared_utils_1.createLogger)('sse-controller');
// Store active connections
const clients = [];
const sseHandler = (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
    };
    res.writeHead(200, headers);
    const clientId = Date.now().toString();
    const newClient = { id: clientId, res };
    clients.push(newClient);
    logger.info({ clientId }, 'Client connected to SSE');
    req.on('close', () => {
        logger.info({ clientId }, 'Client disconnected from SSE');
        const index = clients.findIndex(c => c.id === clientId);
        if (index !== -1)
            clients.splice(index, 1);
    });
};
exports.sseHandler = sseHandler;
const broadcastNotification = (data) => {
    clients.forEach(client => {
        client.res.write(`data: ${JSON.stringify(data)}\n\n`);
    });
    logger.info({ clientCount: clients.length }, 'Broadcasted SSE notification');
};
exports.broadcastNotification = broadcastNotification;
//# sourceMappingURL=sse.controller.js.map