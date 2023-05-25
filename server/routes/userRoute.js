//user routes
import { Router } from 'express';
const router = Router();
import UserController from '../controllers/userController.js';

// routes
router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.delete('/users', UserController.deleteAllUsers)

export default router;