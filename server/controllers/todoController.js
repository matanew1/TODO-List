import TodoService from "../services/todoService.js";
import { isMAC } from "getmac";

/**
 * Controller class for handling todo-related operations.
 */
class TodoController {
  /**
   * Create a new todo.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the todo is successfully created.
   */

  static getTodoByUserId = async (req, res) => {
    try {
      const todo = await TodoService.getTodoByUserId(req.params._id);
      return res.status(200).send(todo);
    } catch (error) {
      res.status(500).send(err.message);
    }
  };
  static createTodo = async (req, res) => {
    try {
      const newTodo = req.body;
      const todo = await TodoService.createTodo(newTodo);
      res.status(201).send(todo);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  static getAllTasks = async (req, res) => {
    try {
      if (isMAC(req.cookies?.Id)) {
        const tasks = await TodoService.getAllTasks(req.params._id);
        res.status(200).send(tasks);
      } else res.status(401);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

export default TodoController;
