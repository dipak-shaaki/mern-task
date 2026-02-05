import express from 'express';
import taskController from '../controllers/taskController'

const router=express.Router();

router.post('/',taskController.createTask)
router.get('/',taskController.getTasks)
router.get('/:id',taskController.getTasksById)
router.put('/:id',taskController.getTasks)
router.put('/:id',taskController.updateTask)
router.patch('/',taskController.patchTask )
router.delete('/',taskController.deleteTask )

export {router}