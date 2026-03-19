"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mosqueController = exports.MosqueController = void 0;
const mosque_service_1 = require("../services/mosque.service");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
class MosqueController {
    getAllMosques = (0, shared_utils_1.asyncHandler)(async (_req, res) => {
        const mosques = await mosque_service_1.mosqueService.getAllMosques();
        res.status(shared_utils_1.HTTP_STATUS.OK).json(mosques);
    });
    searchMosques = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const { q } = req.query;
        const mosques = await mosque_service_1.mosqueService.searchMosques(String(q || ''));
        res.status(shared_utils_1.HTTP_STATUS.OK).json(mosques);
    });
    getMosqueById = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const mosque = await mosque_service_1.mosqueService.getMosqueById(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(mosque);
    });
    createMosque = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const mosque = await mosque_service_1.mosqueService.createMosque(req.body);
        res.status(shared_utils_1.HTTP_STATUS.CREATED).json(mosque);
    });
    getImams = (0, shared_utils_1.asyncHandler)(async (_req, res) => {
        const imams = await mosque_service_1.mosqueService.getAllImams();
        res.status(shared_utils_1.HTTP_STATUS.OK).json(imams);
    });
    getImamsByMosqueId = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const imams = await mosque_service_1.mosqueService.getImamsByMosqueId(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(imams);
    });
    getImamById = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const imam = await mosque_service_1.mosqueService.getImamById(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(imam);
    });
    getManagementMembers = (0, shared_utils_1.asyncHandler)(async (_req, res) => {
        const members = await mosque_service_1.mosqueService.getAllManagementMembers();
        res.status(shared_utils_1.HTTP_STATUS.OK).json(members);
    });
    getManagementByMosqueId = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const members = await mosque_service_1.mosqueService.getManagementByMosqueId(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(members);
    });
    getManagementMemberById = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const member = await mosque_service_1.mosqueService.getManagementMemberById(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(member);
    });
}
exports.MosqueController = MosqueController;
exports.mosqueController = new MosqueController();
//# sourceMappingURL=mosque.controller.js.map