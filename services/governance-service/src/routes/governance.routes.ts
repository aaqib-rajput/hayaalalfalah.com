import { Router } from 'express';
import { governanceController } from '../controllers/governance.controller';
import { authenticate, authorize } from '@mosqueconnect/shared-utils';

const router = Router();

router.get('/shura/members', governanceController.getAllShuraMembers);
router.get('/shura/members/:id', governanceController.getShuraMemberById);

// Protected routes
router.get('/shura/visits', authenticate, authorize(['SUPER_ADMIN', 'MOSQUE_ADMIN']), (req, res) => res.json({ message: 'Visit logs' }));
router.post('/shura/visits', authenticate, authorize(['SUPER_ADMIN']), (req, res) => res.status(201).json({ message: 'Visit recorded' }));

export default router;
