import express from 'express';
import controller from '../controller';

const router = express.Router();

router.post('/', controller.task.createTask);

export default router;
