import nodemailer from 'nodemailer';
import { config } from '../config';
import { createLogger } from '@mosqueconnect/shared-utils';

const logger = createLogger('email-service');

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: config.smtp.user && config.smtp.pass ? {
        user: config.smtp.user,
        pass: config.smtp.pass,
      } : undefined,
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      const info = await this.transporter.sendMail({
        from: '"MosqueConnect" <noreply@mosqueconnect.com>',
        to,
        subject,
        html,
      });
      logger.info({ messageId: info.messageId, to }, 'Email sent successfully');
      return info;
    } catch (error) {
      logger.error({ error, to }, 'Failed to send email');
      throw error;
    }
  }

  async verifyConnection() {
    try {
      await this.transporter.verify();
      logger.info('SMTP connection verified');
      return true;
    } catch (error) {
      logger.error({ error }, 'SMTP connection failed');
      return false;
    }
  }
}

export const emailService = new EmailService();
