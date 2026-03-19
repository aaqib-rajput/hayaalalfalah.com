import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async express route handler to catch errors and pass them to next().
 * Eliminates the need for try/catch in every controller method.
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void | Response>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
