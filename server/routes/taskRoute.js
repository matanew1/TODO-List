import { Router } from 'express';
const router = Router();
import TaskController from '../controllers/taskController.js';

/**
 * POST /todo/tasks - Create a new task.
 */
router.post('/todo/tasks', TaskController.createTask);

router.delete('/todo/tasks/:id', TaskController.deleteTask);

export default router;
