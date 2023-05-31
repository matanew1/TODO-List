import TodoService from '../services/todoService.js'

class TodoController {
    static createTodo = async (req, res) => {
        try {
            const newTodo = req.body
            const todo = await TodoService.createTodo(newTodo);
            res.status(201).send(todo)
        } catch (err) {
            res.status(500).send(err.message)
        }
    };
}

export default TodoController