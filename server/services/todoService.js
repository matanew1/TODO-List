import Todo from '../models/todoSchema.js'

class TodoService {
    static async createTodo(newTodo) {
        try {
            const todo = new Todo(newTodo);
            return await todo.save()
        } catch (err) {
            return new Error(err)
        }
    }
}

export default TodoService