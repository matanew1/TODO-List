import { Router} from 'express'
const router = Router()
import TaskController from '../controllers/taskController.js'

router.post('/todo/tasks', TaskController.createTask);

export default router;