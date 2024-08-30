    const projectService = require("../services/projectService");

    class ProjectController {
    async createProject(req, res) {
        const project = await projectService.createProject(req.body);
        res.status(201).send(project);
    }

    async getAllProjects(req, res) {
        const projects = await projectService.getAllProjects();
        res.status(200).send(projects);
    }

    async getProjectById(req, res) {
        const project = await projectService.getProjectById(req.params.id);
        if (!project) {
        res.status(404).send({ message: "Project not found" });
        } else {
        res.status(200).send(project);
        }
    }

    async updateProject(req, res) {
        await projectService.updateProject(req.params.id, req.body);
        res.status(204).send();
    }

    async deleteProject(req, res) {
        await projectService.deleteProject(req.params.id);
        res.status(204).send();
    }
    }

    module.exports = new ProjectController();