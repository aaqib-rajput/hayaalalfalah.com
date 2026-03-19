import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authenticate, authorize, AuthRequest } from '../auth.middleware';
import jwt from 'jsonwebtoken';
import { UnauthorizedError, ForbiddenError } from '../error-handler';

vi.mock('jsonwebtoken');

describe('Auth Middleware', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = {
      headers: {},
    };
    res = {};
    next = vi.fn();
    vi.clearAllMocks();
  });

  describe('authenticate', () => {
    it('should throw UnauthorizedError if no token is provided', () => {
      expect(() => authenticate(req, res, next)).toThrow(UnauthorizedError);
      expect(next).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedError if token does not start with Bearer', () => {
      req.headers.authorization = 'Basic token123';
      expect(() => authenticate(req, res, next)).toThrow(UnauthorizedError);
    });

    it('should set user on request if token is valid', () => {
      const decodedUser = { id: '1', role: 'MEMBER', email: 'test@test.com' };
      req.headers.authorization = 'Bearer valid-token';
      (jwt.verify as any).mockReturnValue(decodedUser);

      authenticate(req, res, next);

      expect(req.user).toEqual(decodedUser);
      expect(next).toHaveBeenCalled();
    });

    it('should throw UnauthorizedError if token is invalid', () => {
      req.headers.authorization = 'Bearer invalid-token';
      (jwt.verify as any).mockImplementation(() => {
        throw new Error('invalid token');
      });

      expect(() => authenticate(req, res, next)).toThrow(UnauthorizedError);
    });
  });

  describe('authorize', () => {
    it('should allow access if user role is included in allowed roles', () => {
      req.user = { id: '1', role: 'MOSQUE_ADMIN', email: 'admin@test.com' };
      const middleware = authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN'] as any);

      middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should throw ForbiddenError if user role is not included in allowed roles', () => {
      req.user = { id: '1', role: 'MEMBER', email: 'user@test.com' };
      const middleware = authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN'] as any);

      expect(() => middleware(req, res, next)).toThrow(ForbiddenError);
    });

    it('should throw ForbiddenError if no user is present on request', () => {
      const middleware = authorize(['MEMBER'] as any);

      expect(() => middleware(req, res, next)).toThrow(ForbiddenError);
    });
  });
});
