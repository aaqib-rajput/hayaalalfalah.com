import { Request, Response } from 'express';
export declare class MosqueController {
    getAllMosques: (req: Request, res: Response, next: import("express").NextFunction) => void;
    searchMosques: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getMosqueById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    createMosque: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getImams: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getImamsByMosqueId: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getImamById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getManagementMembers: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getManagementByMosqueId: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getManagementMemberById: (req: Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const mosqueController: MosqueController;
//# sourceMappingURL=mosque.controller.d.ts.map