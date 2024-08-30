const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/projects', projectController.createTask.bind(projectController));
router.get('/projects', projectController.getAllTask.bind(projectController));
router.get('/projects/:id', projectController.getTaskById.bind(projectController));
router.put('/projects/:id', projectController.updateTask.bind(projectController));
router.delete('/projects/:id', projectController.deleteTask.bind(projectController));