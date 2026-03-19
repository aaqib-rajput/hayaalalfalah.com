import { Router } from 'express';
import { mosqueController } from '../controllers/mosque.controller';
import { authenticate, authorize } from '@mosqueconnect/shared-utils';

const router = Router();

// Mosque routes
router.get('/mosques/search', mosqueController.searchMosques);
router.get('/mosques', mosqueController.getAllMosques);
router.get('/mosques/imams', mosqueController.getImams);
router.get('/mosques/management', mosqueController.getManagementMembers);
router.get('/mosques/:id', mosqueController.getMosqueById);
router.get('/mosques/:id/imams', mosqueController.getImamsByMosqueId);
router.get('/mosques/:id/management', mosqueController.getManagementByMosqueId);

// Write routes
router.post('/mosques', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), mosqueController.createMosque);
router.put('/mosques/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), mosqueController.updateMosque);
router.delete('/mosques/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), mosqueController.deleteMosque);
router.post('/imams', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), mosqueController.createImam);
router.put('/imams/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), mosqueController.updateImam);
router.delete('/imams/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), mosqueController.deleteImam);

// Direct entity access routes
router.get('/imams/:id', mosqueController.getImamById);
router.get('/management/:id', mosqueController.getManagementMemberById);

export default router;
