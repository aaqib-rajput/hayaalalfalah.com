"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = exports.EmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const logger = (0, shared_utils_1.createLogger)('email-service');
class EmailService {
    transporter;
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: config_1.config.smtp.host,
            port: config_1.config.smtp.port,
            secure: config_1.config.smtp.secure,
            auth: config_1.config.smtp.user && config_1.config.smtp.pass ? {
                user: config_1.config.smtp.user,
                pass: config_1.config.smtp.pass,
            } : undefined,
        });
    }
    async sendEmail(to, subject, html) {
        try {
            const info = await this.transporter.sendMail({
                from: '"MosqueConnect" <noreply@mosqueconnect.com>',
                to,
                subject,
                html,
            });
            logger.info({ messageId: info.messageId, to }, 'Email sent successfully');
            return info;
        }
        catch (error) {
            logger.error({ error, to }, 'Failed to send email');
            throw error;
        }
    }
    async verifyConnection() {
        try {
            await this.transporter.verify();
            logger.info('SMTP connection verified');
            return true;
        }
        catch (error) {
            logger.error({ error }, 'SMTP connection failed');
            return false;
        }
    }
}
exports.EmailService = EmailService;
exports.emailService = new EmailService();
//# sourceMappingURL=email.service.js.map