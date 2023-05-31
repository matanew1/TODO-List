import TaskService from '../services/taskService.js'

class TaskController {
    static createTask = async (req, res) => {
        try {
            const newTask = req.body
            const task = await TaskService.createTask(newTask);
            res.status(201).send(task)
        } catch (err) {
            res.status(500).send(err.message)
        }
    };
}

export default TaskController