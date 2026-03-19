import { Request, Response, NextFunction } from 'express';
import { Logger } from './logger';

// Custom error classes

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly code: string;

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'INTERNAL_ERROR',
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.code = code;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string, id?: string) {
    const message = id
      ? `${resource} with id '${id}' not found`
      : `${resource} not found`;
    super(message, 404, 'NOT_FOUND');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ValidationError extends AppError {
  public readonly errors: Array<{ field?: string; message: string }>;

  constructor(
    message: string,
    errors: Array<{ field?: string; message: string }> = []
  ) {
    super(message, 400, 'VALIDATION_ERROR');
    this.errors = errors;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, 401, 'UNAUTHORIZED');
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403, 'FORBIDDEN');
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

// Error handler middleware

export function createErrorHandler(logger: Logger) {
  return (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      logger.warn(
        { err, statusCode: err.statusCode, code: err.code },
        err.message
      );

      const response: Record<string, unknown> = {
        success: false,
        error: {
          message: err.message,
          code: err.code,
        },
      };

      if (err instanceof ValidationError && err.errors.length > 0) {
        response.error = {
          ...(response.error as Record<string, unknown>),
          details: err.errors,
        };
      }

      return res.status(err.statusCode).json(response);
    }

    // Unexpected errors
    logger.error({ err }, 'Unhandled error');
    return res.status(500).json({
      success: false,
      error: {
        message: 'Internal server error',
        code: 'INTERNAL_ERROR',
      },
    });
  };
}
