import { Router } from 'express';
import { communityController } from '../controllers/community.controller';
import { authenticate, authorize } from '@mosqueconnect/shared-utils';

const router = Router();

router.get('/community/announcements', communityController.getAllAnnouncements);
router.post(
  '/community/announcements',
  authenticate,
  authorize(['MOSQUE_ADMIN', 'IMAM', 'SUPER_ADMIN']),
  communityController.createAnnouncement
);
router.put(
  '/community/announcements/:id',
  authenticate,
  authorize(['MOSQUE_ADMIN', 'IMAM', 'SUPER_ADMIN']),
  communityController.updateAnnouncement
);
router.delete(
  '/community/announcements/:id',
  authenticate,
  authorize(['MOSQUE_ADMIN', 'IMAM', 'SUPER_ADMIN']),
  communityController.deleteAnnouncement
);

router.get('/mosques/:id/announcements', communityController.getAnnouncementsByMosqueId);
router.get('/announcements/:id', communityController.getAnnouncementById);

export default router;
