import { Router } from "express";
const router = Router();
import TodoController from "../controllers/todoController.js";
import configuration from "../config/config.js";
import cors from "cors";

const corsOptions = configuration.corsOptions;
router.options("/todo/tasks/", cors(corsOptions));
/**
 * POST /todo - Create a new todo.
 */
router.post("/todo", TodoController.createTodo);
router.get("/todo/:_id", TodoController.getTodoByUserId);
router.get("/todo/tasks/:_id", cors(corsOptions), TodoController.getAllTasks);

export default router;
