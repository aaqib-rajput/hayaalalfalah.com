import { Request, Response } from 'express';
import { mosqueService } from '../services/mosque.service';
import { asyncHandler, HTTP_STATUS } from '@mosqueconnect/shared-utils';

export class MosqueController {
  getAllMosques = asyncHandler(async (_req: Request, res: Response) => {
    const mosques = await mosqueService.getAllMosques();
    res.status(HTTP_STATUS.OK).json(mosques);
  });

  searchMosques = asyncHandler(async (req: Request, res: Response) => {
    const { q } = req.query;
    const mosques = await mosqueService.searchMosques(String(q || ''));
    res.status(HTTP_STATUS.OK).json(mosques);
  });

  getMosqueById = asyncHandler(async (req: Request, res: Response) => {
    const mosque = await mosqueService.getMosqueById(req.params.id);
    res.status(HTTP_STATUS.OK).json(mosque);
  });

  createMosque = asyncHandler(async (req: Request, res: Response) => {
    const mosque = await mosqueService.createMosque(req.body);
    res.status(HTTP_STATUS.CREATED).json(mosque);
  });

  updateMosque = asyncHandler(async (req: Request, res: Response) => {
    const mosque = await mosqueService.updateMosque(req.params.id, req.body);
    res.status(HTTP_STATUS.OK).json(mosque);
  });

  deleteMosque = asyncHandler(async (req: Request, res: Response) => {
    await mosqueService.deleteMosque(req.params.id);
    res.status(HTTP_STATUS.NO_CONTENT).send();
  });

  getImams = asyncHandler(async (_req: Request, res: Response) => {
    const imams = await mosqueService.getAllImams();
    res.status(HTTP_STATUS.OK).json(imams);
  });

  getImamsByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const imams = await mosqueService.getImamsByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(imams);
  });

  getImamById = asyncHandler(async (req: Request, res: Response) => {
    const imam = await mosqueService.getImamById(req.params.id);
    res.status(HTTP_STATUS.OK).json(imam);
  });

  createImam = asyncHandler(async (req: Request, res: Response) => {
    const imam = await mosqueService.createImam(req.body);
    res.status(HTTP_STATUS.CREATED).json(imam);
  });

  updateImam = asyncHandler(async (req: Request, res: Response) => {
    const imam = await mosqueService.updateImam(req.params.id, req.body);
    res.status(HTTP_STATUS.OK).json(imam);
  });

  deleteImam = asyncHandler(async (req: Request, res: Response) => {
    await mosqueService.deleteImam(req.params.id);
    res.status(HTTP_STATUS.NO_CONTENT).send();
  });

  getManagementMembers = asyncHandler(async (_req: Request, res: Response) => {
    const members = await mosqueService.getAllManagementMembers();
    res.status(HTTP_STATUS.OK).json(members);
  });

  getManagementByMosqueId = asyncHandler(async (req: Request, res: Response) => {
    const members = await mosqueService.getManagementByMosqueId(req.params.id);
    res.status(HTTP_STATUS.OK).json(members);
  });

  getManagementMemberById = asyncHandler(async (req: Request, res: Response) => {
    const member = await mosqueService.getManagementMemberById(req.params.id);
    res.status(HTTP_STATUS.OK).json(member);
  });
}

export const mosqueController = new MosqueController();
