import { Router} from 'express'
const router = Router()
import TodoController from '../controllers/todoController.js'

router.post('/todo', TodoController.createTodo);

export default router;