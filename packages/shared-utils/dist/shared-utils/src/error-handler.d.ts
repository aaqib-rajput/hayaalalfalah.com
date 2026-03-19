import { Request, Response, NextFunction } from 'express';
import { Logger } from './logger';
export declare class AppError extends Error {
    readonly statusCode: number;
    readonly isOperational: boolean;
    readonly code: string;
    constructor(message: string, statusCode?: number, code?: string, isOperational?: boolean);
}
export declare class NotFoundError extends AppError {
    constructor(resource: string, id?: string);
}
export declare class ValidationError extends AppError {
    readonly errors: Array<{
        field?: string;
        message: string;
    }>;
    constructor(message: string, errors?: Array<{
        field?: string;
        message: string;
    }>);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export declare function createErrorHandler(logger: Logger): (err: Error, _req: Request, res: Response, _next: NextFunction) => Response<any, Record<string, any>>;
//# sourceMappingURL=error-handler.d.ts.map