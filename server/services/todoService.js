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


  static async getAllTasks(todoId) {
    try {
      const todo = await Todo.findById(todoId).populate('tasks').then(task => console.log(task)).catch(err => console.log(err))

      console.log(todo)
      const tasks = todo.tasks

    } catch (err) {
      throw new Error(err);
    }
  }
}

export default TodoService;
