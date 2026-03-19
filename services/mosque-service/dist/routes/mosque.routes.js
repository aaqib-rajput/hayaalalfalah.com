"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mosque_controller_1 = require("../controllers/mosque.controller");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const router = (0, express_1.Router)();
// Mosque routes
router.get('/mosques/search', mosque_controller_1.mosqueController.searchMosques);
router.get('/mosques', mosque_controller_1.mosqueController.getAllMosques);
router.get('/mosques/imams', mosque_controller_1.mosqueController.getImams);
router.get('/mosques/management', shared_utils_1.authenticate, mosque_controller_1.mosqueController.getManagementMembers);
router.get('/mosques/:id', mosque_controller_1.mosqueController.getMosqueById);
router.get('/mosques/:id/imams', mosque_controller_1.mosqueController.getImamsByMosqueId);
router.get('/mosques/:id/management', shared_utils_1.authenticate, mosque_controller_1.mosqueController.getManagementByMosqueId);
// Write routes
router.post('/mosques', shared_utils_1.authenticate, mosque_controller_1.mosqueController.createMosque);
// Direct entity access routes
router.get('/imams/:id', mosque_controller_1.mosqueController.getImamById);
router.get('/management/:id', mosque_controller_1.mosqueController.getManagementMemberById);
exports.default = router;
//# sourceMappingURL=mosque.routes.js.map