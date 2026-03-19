import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { asyncHandler, HTTP_STATUS, type AuthRequest } from '@mosqueconnect/shared-utils';
import { config } from '../config';

function setSessionCookie(res: Response, token: string) {
  res.cookie(config.authCookieName, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: config.env === 'production',
    path: '/',
    maxAge: config.authCookieMaxAgeMs,
  });
}

function clearSessionCookie(res: Response) {
  res.clearCookie(config.authCookieName, {
    httpOnly: true,
    sameSite: 'lax',
    secure: config.env === 'production',
    path: '/',
  });
}

export class AuthController {
  register = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.register(req.body);
    setSessionCookie(res, result.token);
    res.status(HTTP_STATUS.CREATED).json({ user: result.user });
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const result = await authService.login(req.body);
    setSessionCookie(res, result.token);
    res.status(HTTP_STATUS.OK).json({ user: result.user });
  });

  getMe = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.getCurrentUser((req as AuthRequest).user!.id);
    res.status(HTTP_STATUS.OK).json(user);
  });

  logout = asyncHandler(async (_req: Request, res: Response) => {
    clearSessionCookie(res);
    res.status(HTTP_STATUS.NO_CONTENT).send();
  });
}

export const authController = new AuthController();
