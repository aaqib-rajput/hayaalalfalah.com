import { Request, Response, NextFunction } from 'express';
/**
 * Wraps an async express route handler to catch errors and pass them to next().
 * Eliminates the need for try/catch in every controller method.
 */
export declare function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void | Response>): (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=async-handler.d.ts.map