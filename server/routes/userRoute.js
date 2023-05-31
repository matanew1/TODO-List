import { Router } from 'express';
const router = Router();
import UserController from '../controllers/userController.js';

/**
 * Defines the routes for user-related operations.
 */

/**
 * GET /users - Retrieve all users.
 */
router.get('/users', UserController.getAllUsers);

/**
 * GET /users/:email - Retrieve a user by email.
 */
router.get('/users/:email', UserController.getUserByEmail);

/**
 * POST /users - Create a new user.
 */
router.post('/users', UserController.createUser);

/**
 * DELETE /users - Delete all users.
 */
router.delete('/users', UserController.deleteAllUsers);

/**
 * PUT /users - Update a user.
 */
router.put('/users', UserController.updateUser);

export default router;
