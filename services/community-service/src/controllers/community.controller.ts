import { Request, Response } from 'express';
import { communityService } from '../services/community.service';
import { asyncHandler, HTTP_STATUS } from '@mosqueconnect/shared-utils';

export class CommunityController {
  getAllAnnouncements = asyncHandler(async (_req: Request, res: Response) => {
    const data = await communityService.getAllAnnouncements();
    res.status(HTTP_STATUS.OK).json(data);
  });

  getAnnouncementsByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const data = await communityService.getAnnouncementsByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  getAnnouncementById = asyncHandler(async (req: Request, res: Response) => {
    const data = await communityService.getAnnouncementById(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  createAnnouncement = asyncHandler(async (req: Request, res: Response) => {
    const data = await communityService.createAnnouncement(req.body);
    res.status(HTTP_STATUS.CREATED).json(data);
  });

  updateAnnouncement = asyncHandler(async (req: Request, res: Response) => {
    const data = await communityService.updateAnnouncement(req.params.id, req.body);
    res.status(HTTP_STATUS.OK).json(data);
  });

  deleteAnnouncement = asyncHandler(async (req: Request, res: Response) => {
    await communityService.deleteAnnouncement(req.params.id);
    res.status(HTTP_STATUS.NO_CONTENT).send();
  });
}

export const communityController = new CommunityController();
