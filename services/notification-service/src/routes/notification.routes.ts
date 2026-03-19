import { Router } from 'express';
import * as notificationController from '../controllers/notification.controller';
import { sseHandler } from '../controllers/sse.controller';

const router = Router();

router.post('/send', notificationController.sendNotification);
router.get('/stream', sseHandler);

export default router;
