import { Request, Response } from 'express';
import { libraryService } from '../services/library.service';
import { asyncHandler, HTTP_STATUS } from '@mosqueconnect/shared-utils';

export class LibraryController {
  getAllBooks = asyncHandler(async (_req: Request, res: Response) => {
    const data = await libraryService.getAllBooks();
    res.status(HTTP_STATUS.OK).json(data);
  });

  getBooksByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const data = await libraryService.getBooksByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });

  getBookById = asyncHandler(async (req: Request, res: Response) => {
    const data = await libraryService.getBookById(req.params.id);
    res.status(HTTP_STATUS.OK).json(data);
  });
}

export const libraryController = new LibraryController();
