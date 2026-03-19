"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeController = exports.FinanceController = void 0;
const finance_service_1 = require("../services/finance.service");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
class FinanceController {
    getAllGoals = (0, shared_utils_1.asyncHandler)(async (_req, res) => {
        const data = await finance_service_1.financeService.getAllGoals();
        res.status(shared_utils_1.HTTP_STATUS.OK).json(data);
    });
    getGoalsByMosqueId = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const data = await finance_service_1.financeService.getGoalsByMosqueId(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(data);
    });
    getGoalById = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const data = await finance_service_1.financeService.getGoalById(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(data);
    });
    getAllRecords = (0, shared_utils_1.asyncHandler)(async (_req, res) => {
        const data = await finance_service_1.financeService.getAllRecords();
        res.status(shared_utils_1.HTTP_STATUS.OK).json(data);
    });
    getRecordsByMosqueId = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const data = await finance_service_1.financeService.getRecordsByMosqueId(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(data);
    });
    getRecordById = (0, shared_utils_1.asyncHandler)(async (req, res) => {
        const data = await finance_service_1.financeService.getRecordById(req.params.id);
        res.status(shared_utils_1.HTTP_STATUS.OK).json(data);
    });
}
exports.FinanceController = FinanceController;
exports.financeController = new FinanceController();
//# sourceMappingURL=finance.controller.js.map