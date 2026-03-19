"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = void 0;
const email_service_1 = require("../services/email.service");
const template_service_1 = require("../services/template.service");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
exports.sendNotification = (0, shared_utils_1.asyncHandler)(async (req, res) => {
    const { to, type, templateName, data, subject, content } = req.body;
    // For now, only EMAIL is supported
    if (type === 'EMAIL') {
        let finalContent = content;
        let finalSubject = subject;
        if (templateName) {
            // Future: Fetch template from DB
            // For now, mock a welcome template
            if (templateName === 'WELCOME') {
                const template = '<h1>Welcome to MosqueConnect, {{name}}!</h1><p>We are glad to have you.</p>';
                finalContent = template_service_1.templateService.render(template, data);
                finalSubject = 'Welcome to MosqueConnect';
            }
        }
        await email_service_1.emailService.sendEmail(to, finalSubject, finalContent);
    }
    res.json({ status: 'sent', recipient: to });
});
//# sourceMappingURL=notification.controller.js.map