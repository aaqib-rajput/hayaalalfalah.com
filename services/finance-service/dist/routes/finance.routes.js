"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const finance_controller_1 = require("../controllers/finance.controller");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const router = (0, express_1.Router)();
router.get('/finance/goals', finance_controller_1.financeController.getAllGoals);
router.get('/finance/records', shared_utils_1.authenticate, (0, shared_utils_1.authorize)(['MOSQUE_ADMIN', 'SUPER_ADMIN']), finance_controller_1.financeController.getAllRecords);
router.get('/mosques/:id/finance/goals', finance_controller_1.financeController.getGoalsByMosqueId);
router.get('/mosques/:id/finance/records', shared_utils_1.authenticate, (0, shared_utils_1.authorize)(['MOSQUE_ADMIN', 'SUPER_ADMIN']), finance_controller_1.financeController.getRecordsByMosqueId);
router.get('/finance/goals/:id', finance_controller_1.financeController.getGoalById);
router.get('/finance/records/:id', shared_utils_1.authenticate, (0, shared_utils_1.authorize)(['MOSQUE_ADMIN', 'SUPER_ADMIN']), finance_controller_1.financeController.getRecordById);
exports.default = router;
//# sourceMappingURL=finance.routes.js.map