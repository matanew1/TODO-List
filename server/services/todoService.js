import Todo from '../models/todoSchema.js';
import { ObjectId } from 'mongodb'


class TodoService {
  /**
   * Create a new todo.
   * @param {object} newTodo - The new todo object.
   * @returns {Promise<object>} - The created todo.
   */
  static async createTodo(newTodo) {
    try {
      const todo = new Todo(newTodo);
      return await todo.save();
    } catch (err) {
      throw new Error(err);
    }
  }


  static async getAllTasks(userId) {
    try {
      const todo = await Todo.find({owner: userId});
      console.log(todo)
      return await todo.populate('tasks')
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default TodoService;
