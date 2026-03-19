"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const mosque_routes_1 = __importDefault(require("./routes/mosque.routes"));
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const logger = (0, shared_utils_1.createLogger)(config_1.config.serviceName);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
app.use('/api', mosque_routes_1.default);
// Error Handling
app.use((0, shared_utils_1.createErrorHandler)(logger));
app.listen(config_1.config.port, () => {
    logger.info(`Mosque service listening at http://localhost:${config_1.config.port}`);
});
//# sourceMappingURL=index.js.map