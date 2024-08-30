const { Project } = require("../models");

class ProjectRepository {
async create(project) {
    return await Project.create(project);
}

async findAll() {
    return await Project.findAll();
}

async findById(id) {
    return await Project.findByPk(id);
}

async update(id, projectDetails) {
    return await Project.update(projectDetails, {
    where: {
        id: id,
    },
    });
}

async delete(id) {
    return await Project.destroy({
    where: {
        id: id,
    },
    });
}
}

module.exports = new ProjectRepository();