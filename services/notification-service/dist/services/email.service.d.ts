export declare class EmailService {
    private transporter;
    constructor();
    sendEmail(to: string, subject: string, html: string): Promise<any>;
    verifyConnection(): Promise<boolean>;
}
export declare const emailService: EmailService;
//# sourceMappingURL=email.service.d.ts.map