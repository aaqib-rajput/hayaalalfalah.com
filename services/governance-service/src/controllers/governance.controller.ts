import { Request, Response } from 'express';
import { governanceService } from '../services/governance.service';
import { asyncHandler, HTTP_STATUS } from '@mosqueconnect/shared-utils';

export class GovernanceController {
  getAllShuraMembers = asyncHandler(async (_req: Request, res: Response) => {
    const data = await governanceService.getAllShuraMembers();
    res.status(HTTP_STATUS.OK).json(data);
  });

  getShuraMemberById = asyncHandler(async (req: Request, res: Response) => {
    const data = await governanceService.getShuraMemberById(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });
}

export const governanceController = new GovernanceController();
