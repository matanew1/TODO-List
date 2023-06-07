import TaskService from '../services/taskService.js';

/**
 * Controller class for handling task-related operations.
 */
class TaskController {
  /**
   * Create a new task.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the task is successfully created.
   */

  static updateTask = async (req, res) => {
    try {
      const taskId = req.params.id;
      const updatedTask = await TaskService.updateTask(taskId, req.body);
      if (updatedTask) {
        res.status(200).send(`Task ${taskId} Was Updated`);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static createTask = async (req, res) => {
    try {
      const newTask = req.body;
      const task = await TaskService.createTask(newTask);
      res.status(201).send(task);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  static deleteTask = async (req, res) => {
    try {
        await TaskService.deleteTask(req.params.id)
        res.status(200).send(`Task ${req.params.id} Was Deleted`)
    } catch (err) {
      res.status(500).send(err.message)
    }
  }
}

export default TaskController;
