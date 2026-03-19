import { Router } from 'express';
import { financeController } from '../controllers/finance.controller';
import { authenticate, authorize } from '@mosqueconnect/shared-utils';

const router = Router();

router.get('/finance/goals', financeController.getAllGoals);
router.post('/finance/goals', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), financeController.createGoal);
router.get('/finance/records', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), financeController.getAllRecords);
router.post('/finance/records', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), financeController.createRecord);

router.get('/mosques/:id/finance/goals', financeController.getGoalsByMosqueId);
router.get('/mosques/:id/finance/records', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), financeController.getRecordsByMosqueId);
router.get('/mosques/:id/goals', financeController.getGoalsByMosqueId);
router.get('/mosques/:id/records', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), financeController.getRecordsByMosqueId);

router.get('/finance/goals/:id', financeController.getGoalById);
router.get('/finance/records/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), financeController.getRecordById);

export default router;
