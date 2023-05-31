import Task from '../models/taskSchema.js';
import Todo from '../models/todoSchema.js';

class TaskService {
    static async createTask(newTask) {
        try {
            const task = new Task(newTask);
            await TaskService.#addTaskIntoTodo(newTask, task);
            return await task.save();
        } catch (err) {
        throw new Error(err);
        }
    }

    static async #addTaskIntoTodo(newTask, task) {
        const todo = await Todo.findById(newTask.todo).populate('todos'); // get the todo parent
        todo.tasks.push(task);
        await todo.save();
    }
}

export default TaskService;
