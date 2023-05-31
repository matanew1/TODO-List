import { Router} from 'express'
const router = Router()
import todoController from '../controllers/todoController.js'

router.post('/todo', todoController.createTodo);

export default router;