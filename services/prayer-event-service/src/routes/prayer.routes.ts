import { Router } from 'express';
import { prayerController } from '../controllers/prayer.controller';
import { authenticate, authorize } from '@mosqueconnect/shared-utils';

const router = Router();

// Prayer times route
router.get('/prayer-times', prayerController.getPrayerTimes);
router.post('/prayer-times', authenticate, authorize(['IMAM', 'MOSQUE_ADMIN']), (req, res) => res.status(201).json({ message: 'Prayer times updated' }));

// Event routes
router.get('/events', prayerController.getAllEvents);
router.post('/events', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), prayerController.createEvent);
router.get('/events/:id', prayerController.getEventById);
router.put('/events/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), prayerController.updateEvent);
router.delete('/events/:id', authenticate, authorize(['MOSQUE_ADMIN', 'SUPER_ADMIN']), prayerController.deleteEvent);
router.get('/mosques/:id/events', prayerController.getEventsByMosqueId);

export default router;
