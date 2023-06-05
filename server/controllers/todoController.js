import TodoService from '../services/todoService.js';

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
      const tasks = await TodoService.getAllTasks(req.params._id)
      console.log(tasks)
      res.status(200).send(tasks)
    } catch (err) {
      res.status(500).send(err.message)
    }
  }
}

export default TodoController;
