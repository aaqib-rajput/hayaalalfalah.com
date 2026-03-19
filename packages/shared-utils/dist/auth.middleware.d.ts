import { Request, Response, NextFunction } from 'express';
import { UserRole } from '@mosqueconnect/shared-types';
export interface AuthRequest extends Request {
    user?: {
        id: string;
        role: UserRole;
        email: string;
    };
}
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => void;
export declare const authorize: (roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map