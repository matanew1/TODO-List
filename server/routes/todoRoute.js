import { Router } from 'express';
const router = Router();
import TodoController from '../controllers/todoController.js';

/**
 * POST /todo - Create a new todo.
 */
router.post('/todo', TodoController.createTodo);

export default router;
