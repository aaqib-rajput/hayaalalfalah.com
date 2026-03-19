"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const notification_routes_1 = __importDefault(require("./routes/notification.routes"));
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const sse_controller_1 = require("./controllers/sse.controller");
const logger = (0, shared_utils_1.createLogger)(config_1.config.serviceName);
const app = (0, express_1.default)();
const eventBus = new shared_utils_1.EventBus();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Event Bus Subscriptions
eventBus.subscribe('MOSQUE_CREATED', (event) => {
    logger.info({ event }, 'Handling MOSQUE_CREATED event');
    const payload = event.payload;
    (0, sse_controller_1.broadcastNotification)({ type: 'MOSQUE_CREATED', message: `A new mosque was created: ${payload.name}` });
});
eventBus.subscribe('USER_REGISTERED', (event) => {
    logger.info({ event }, 'Handling USER_REGISTERED event');
    const payload = event.payload;
    (0, sse_controller_1.broadcastNotification)({ type: 'USER_REGISTERED', message: `Welcome ${payload.name}!` });
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
        (0, shared_utils_1.sendHealthCheck)(res, config_1.config.serviceName, 'connected');
    }
    catch (err) {
        (0, shared_utils_1.sendHealthCheck)(res, config_1.config.serviceName, 'disconnected');
    }
});
// API Routes
app.use('/api/notifications', notification_routes_1.default);
// Error Handling
app.use((0, shared_utils_1.createErrorHandler)(logger));
app.listen(config_1.config.port, () => {
    logger.info(`Notification service listening at http://localhost:${config_1.config.port}`);
});
//# sourceMappingURL=index.js.map