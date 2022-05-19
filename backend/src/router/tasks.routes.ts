import express from 'express';
import controller from '../controller';

const router = express.Router();

router.post('/', controller.task.createTask);
router.get('/', controller.task.getAll);
router.put('/:id', controller.task.updateTask);

export default router;
