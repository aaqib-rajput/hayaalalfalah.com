"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateService = exports.TemplateService = void 0;
class TemplateService {
    /**
     * Simple placeholder replacement: {{name}} -> value
     */
    render(template, data) {
        let result = template;
        for (const [key, value] of Object.entries(data)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            result = result.replace(regex, String(value));
        }
        return result;
    }
}
exports.TemplateService = TemplateService;
exports.templateService = new TemplateService();
//# sourceMappingURL=template.service.js.map