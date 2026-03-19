import { Request, Response } from 'express';
export declare class FinanceController {
    getAllGoals: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getGoalsByMosqueId: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getGoalById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getAllRecords: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getRecordsByMosqueId: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getRecordById: (req: Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const financeController: FinanceController;
//# sourceMappingURL=finance.controller.d.ts.map