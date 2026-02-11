import express from 'express';
import taskController from '../controllers/taskController.js';

const router=express.Router();

router.post('/', taskController.createTask)
router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getSingleTask)
router.put('/:id', taskController.updateTask)
router.patch('/:id', taskController.patchTask)
router.delete('/:id', taskController.deleteTask)

export default router
