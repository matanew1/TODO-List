import todoService from '../services/todoService.js'

class todoController {
    static createTodo = async (req, res) => {
        try {
            const newTodo = req.body
            const todo = await todoService.createTodo(newTodo);
            res.status(201).send(todo)
        } catch (err) {
            res.status(500).send(err.message)
        }
    };
}

export default todoController