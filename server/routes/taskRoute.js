import { Router } from 'express';
const router = Router();
import TaskController from '../controllers/taskController.js';

/**
 * POST /todo/tasks - Create a new task.
 */
router.post('/todo/tasks', TaskController.createTask);

router.put('/todo/tasks/:id', TaskController.updateTask);

router.delete('/todo/tasks/:id', TaskController.deleteTask);

export default router;
