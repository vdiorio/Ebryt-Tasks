import express from 'express';
import controller from '../controller';
import middlewares from '../middlewares';

const router = express.Router();

router.post(
  '/',
  middlewares.task.validateNewTask,
  controller.task.createTask,
);

router.get('/', controller.task.getAll);

router.put(
  '/:id',
  middlewares.task.validateUpdateTask,
  controller.task.updateTask,
);

router.delete('/:id', controller.task.deleteTask);

export default router;
