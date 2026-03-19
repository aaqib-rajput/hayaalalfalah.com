import { Request, Response } from 'express';
import { prayerService } from '../services/prayer.service';
import { asyncHandler, HTTP_STATUS, ValidationError } from '@mosqueconnect/shared-utils';

export class PrayerController {
  getPrayerTimes = asyncHandler(async (req: Request, res: Response) => {
    const mosqueId = String(req.query.mosqueId || '');
    const date = String(req.query.date || new Date().toISOString().split('T')[0]);

    if (!mosqueId) {
      throw new ValidationError('mosqueId query parameter is required');
    }

    const prayerTimes = await prayerService.getPrayerTimes(mosqueId, date);
    res.status(HTTP_STATUS.OK).json(prayerTimes);
  });

  getAllEvents = asyncHandler(async (_req: Request, res: Response) => {
    const events = await prayerService.getAllEvents();
    res.status(HTTP_STATUS.OK).json(events);
  });

  getEventsByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const events = await prayerService.getEventsByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(events);
  });

  getEventById = asyncHandler(async (req: Request, res: Response) => {
    const event = await prayerService.getEventById(req.params.id);
    res.status(HTTP_STATUS.OK).json(event);
  });

  createEvent = asyncHandler(async (req: Request, res: Response) => {
    const event = await prayerService.createEvent(req.body);
    res.status(HTTP_STATUS.CREATED).json(event);
  });

  updateEvent = asyncHandler(async (req: Request, res: Response) => {
    const event = await prayerService.updateEvent(req.params.id, req.body);
    res.status(HTTP_STATUS.OK).json(event);
  });

  deleteEvent = asyncHandler(async (req: Request, res: Response) => {
    await prayerService.deleteEvent(req.params.id);
    res.status(HTTP_STATUS.NO_CONTENT).send();
  });
}

export const prayerController = new PrayerController();
