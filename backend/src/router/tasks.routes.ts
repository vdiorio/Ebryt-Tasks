import express from 'express';
import controller from '../controller';

const router = express.Router();

router.post('/', controller.task.createTask);
router.get('/', controller.task.getAll);
router.put('/:id', controller.task.updateTask);
router.put('/:id', controller.task.deleteTask);

export default router;
