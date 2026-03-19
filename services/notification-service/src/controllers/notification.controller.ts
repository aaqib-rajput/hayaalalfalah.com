import { Request, Response } from 'express';
import { emailService } from '../services/email.service';
import { templateService } from '../services/template.service';
import { asyncHandler } from '@mosqueconnect/shared-utils';

export const sendNotification = asyncHandler(async (req: Request, res: Response) => {
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
        finalContent = templateService.render(template, data);
        finalSubject = 'Welcome to MosqueConnect';
      }
    }

    await emailService.sendEmail(to, finalSubject, finalContent);
  }

  res.json({ status: 'sent', recipient: to });
});
