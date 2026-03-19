import { Request, Response } from 'express';
import { financeService } from '../services/finance.service';
import { asyncHandler, HTTP_STATUS } from '@mosqueconnect/shared-utils';

export class FinanceController {
  getAllGoals = asyncHandler(async (_req: Request, res: Response) => {
    const data = await financeService.getAllGoals();
    res.status(HTTP_STATUS.OK).json(data);
  });

  getGoalsByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const data = await financeService.getGoalsByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  getGoalById = asyncHandler(async (req: Request, res: Response) => {
    const data = await financeService.getGoalById(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  createGoal = asyncHandler(async (req: Request, res: Response) => {
    const data = await financeService.createGoal(req.body);
    res.status(HTTP_STATUS.CREATED).json(data);
  });

  getAllRecords = asyncHandler(async (_req: Request, res: Response) => {
    const data = await financeService.getAllRecords();
    res.status(HTTP_STATUS.OK).json(data);
  });

  getRecordsByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const data = await financeService.getRecordsByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  getRecordById = asyncHandler(async (req: Request, res: Response) => {
    const data = await financeService.getRecordById(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  createRecord = asyncHandler(async (req: Request, res: Response) => {
    const data = await financeService.createRecord(req.body);
    res.status(HTTP_STATUS.CREATED).json(data);
  });
}

export const financeController = new FinanceController();
