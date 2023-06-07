import Task from '../models/taskSchema.js';
import Todo from '../models/todoSchema.js';

class TaskService {
    /**
     * Create a new task.
     * @param {object} newTask - The new task object.
     * @returns {Promise<object>} - The created task.
     */

    static async updateTask(taskId, updateTask) {
        try {
            const task = await Task.findById(taskId);
            Object.assign(task, updateTask);                      
            return await task.save();
        } catch (error) {
            throw new Error(error);
        }
    };
    
    static async createTask(newTask) {
        try {
            const task = new Task(newTask);
            await TaskService.#addTaskIntoTodo(newTask, task);
            return await task.save();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async deleteTask(taskId) {
        try {
            const task = await Task.findById(taskId)
            const todo = await Todo.findById(task.todo)
            var index = todo.tasks.indexOf(taskId)
            todo.tasks.splice(index, 1)
            await todo.save()
            await Task.findByIdAndDelete(taskId);
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Add a task to the corresponding todo.
     * @param {object} newTask - The new task object.
     * @param {object} task - The created task object.
     * @returns {Promise<void>}
     * @private
     */
    static async #addTaskIntoTodo(newTask, task) {
        const todo = await Todo.findById(newTask.todo).populate('todos'); // get the todo parent
        todo.tasks.push(task);
        await todo.save();
    }
}

export default TaskService;
