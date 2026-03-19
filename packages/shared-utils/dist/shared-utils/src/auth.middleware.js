"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_handler_1 = require("./error-handler");
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-this';
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME || 'mc_access_token';
function getCookieValue(cookieHeader, key) {
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
const authenticate = (req, _res, next) => {
    const authHeader = req.headers.authorization;
    const bearerToken = authHeader?.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;
    const cookieToken = getCookieValue(req.headers.cookie, AUTH_COOKIE_NAME);
    const token = bearerToken || cookieToken;
    if (!token) {
        throw new error_handler_1.UnauthorizedError('No token provided');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        throw new error_handler_1.UnauthorizedError('Invalid or expired token');
    }
};
exports.authenticate = authenticate;
const authorize = (roles) => {
    return (req, _res, next) => {
        const user = req.user;
        if (!user || !roles.includes(user.role)) {
            throw new error_handler_1.ForbiddenError('You do not have permission to perform this action');
        }
        next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=auth.middleware.js.map