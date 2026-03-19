export class TemplateService {
  /**
   * Simple placeholder replacement: {{name}} -> value
   */
  render(template: string, data: Record<string, string | number>) {
    let result = template;
    for (const [key, value] of Object.entries(data)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(regex, String(value));
    }
    return result;
  }

  // Future: Add Handlebars or EJS support here
}

export const templateService = new TemplateService();
