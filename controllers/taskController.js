    const taskService = require("../services/taskService");

    class TaskController {
    async createTask(req, res) {
        const task = await taskService.createTask(req.body);
        res.status(201).send(task);
    }

    async getAllTasks(req, res) {
        const tasks = await taskService.getAllTasks();
        res.status(200).send(tasks);
    }

    async getTaskById(req, res) {
        console.log(req.params.id);
        const task = await taskService.getTaskById(req.params.id);
        if (!task) {
        res.status(404).send({ message: "Task not found" });
        } else {
        res.status(200).send(task);
        }
    }

    async updateTask(req, res) {
        await taskService.updateTask(req.params.id, req.body);
        res.status(204).send();
    }

    async deleteTask(req, res) {
        await taskService.deleteTask(req.params.id);
        res.status(204).send();
    }
    }

    module.exports = new TaskController();