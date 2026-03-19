import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError, ForbiddenError } from './error-handler';
import { UserRole } from '@mosqueconnect/shared-types';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-this';
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME || 'mc_access_token';

function getCookieValue(cookieHeader: string | undefined, key: string): string | null {
  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader.split(';');
  for (const cookie of cookies) {
    const [rawName, ...rawValue] = cookie.trim().split('=');
    if (rawName === key) {
      return decodeURIComponent(rawValue.join('='));
    }
  }

  return null;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
    email: string;
  };
}

export const authenticate = (req: Request, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader?.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : null;
  const cookieToken = getCookieValue(req.headers.cookie, AUTH_COOKIE_NAME);
  const token = bearerToken || cookieToken;

  if (!token) {
    throw new UnauthorizedError('No token provided');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    (req as AuthRequest).user = decoded;
    next();
  } catch (err) {
    throw new UnauthorizedError('Invalid or expired token');
  }
};

export const authorize = (roles: UserRole[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const user = (req as AuthRequest).user;

    if (!user || !roles.includes(user.role)) {
      throw new ForbiddenError('You do not have permission to perform this action');
    }

    next();
  };
};
