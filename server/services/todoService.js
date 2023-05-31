import Todo from '../models/todoSchema.js';

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
}

export default TodoService;
