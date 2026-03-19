import { Router } from 'express';
import { libraryController } from '../controllers/library.controller';
import { authenticate, authorize } from '@mosqueconnect/shared-utils';

const router = Router();

router.get('/library/books', libraryController.getAllBooks);
router.post('/library/books', authenticate, authorize(['MOSQUE_ADMIN']), (req, res) => res.status(201).json({ message: 'Book added' }));
router.get('/mosques/:id/books', libraryController.getBooksByMosqueId);
router.get('/books/:id', libraryController.getBookById);

export default router;
