"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const auth_middleware_1 = require("../auth.middleware");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_handler_1 = require("../error-handler");
vitest_1.vi.mock('jsonwebtoken');
(0, vitest_1.describe)('Auth Middleware', () => {
    let req;
    let res;
    let next;
    (0, vitest_1.beforeEach)(() => {
        req = {
            headers: {},
        };
        res = {};
        next = vitest_1.vi.fn();
        vitest_1.vi.clearAllMocks();
    });
    (0, vitest_1.describe)('authenticate', () => {
        (0, vitest_1.it)('should throw UnauthorizedError if no token is provided', () => {
            (0, vitest_1.expect)(() => (0, auth_middleware_1.authenticate)(req, res, next)).toThrow(error_handler_1.UnauthorizedError);
            (0, vitest_1.expect)(next).not.toHaveBeenCalled();
        });
        (0, vitest_1.it)('should throw UnauthorizedError if token does not start with Bearer', () => {
            req.headers.authorization = 'Basic token123';
            (0, vitest_1.expect)(() => (0, auth_middleware_1.authenticate)(req, res, next)).toThrow(error_handler_1.UnauthorizedError);
        });
        (0, vitest_1.it)('should set user on request if token is valid', () => {
            const decodedUser = { id: '1', role: 'MEMBER', email: 'test@test.com' };
            req.headers.authorization = 'Bearer valid-token';
            jsonwebtoken_1.default.verify.mockReturnValue(decodedUser);
            (0, auth_middleware_1.authenticate)(req, res, next);
            (0, vitest_1.expect)(req.user).toEqual(decodedUser);
            (0, vitest_1.expect)(next).toHaveBeenCalled();
        });
        (0, vitest_1.it)('should throw UnauthorizedError if token is invalid', () => {
            req.headers.authorization = 'Bearer invalid-token';
            jsonwebtoken_1.default.verify.mockImplementation(() => {
                throw new Error('invalid token');
            });
            (0, vitest_1.expect)(() => (0, auth_middleware_1.authenticate)(req, res, next)).toThrow(error_handler_1.UnauthorizedError);
        });
    });
    (0, vitest_1.describe)('authorize', () => {
        (0, vitest_1.it)('should allow access if user role is included in allowed roles', () => {
            req.user = { id: '1', role: 'MOSQUE_ADMIN', email: 'admin@test.com' };
            const middleware = (0, auth_middleware_1.authorize)(['MOSQUE_ADMIN', 'SUPER_ADMIN']);
            middleware(req, res, next);
            (0, vitest_1.expect)(next).toHaveBeenCalled();
        });
        (0, vitest_1.it)('should throw ForbiddenError if user role is not included in allowed roles', () => {
            req.user = { id: '1', role: 'MEMBER', email: 'user@test.com' };
            const middleware = (0, auth_middleware_1.authorize)(['MOSQUE_ADMIN', 'SUPER_ADMIN']);
            (0, vitest_1.expect)(() => middleware(req, res, next)).toThrow(error_handler_1.ForbiddenError);
        });
        (0, vitest_1.it)('should throw ForbiddenError if no user is present on request', () => {
            const middleware = (0, auth_middleware_1.authorize)(['MEMBER']);
            (0, vitest_1.expect)(() => middleware(req, res, next)).toThrow(error_handler_1.ForbiddenError);
        });
    });
});
//# sourceMappingURL=auth.middleware.test.js.map