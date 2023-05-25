//user routes
import { Router } from 'express';
const router = Router();
import UserController from '../controllers/userController.js';

// routes
router.get('/users', UserController.getAllUsers);

export default router;