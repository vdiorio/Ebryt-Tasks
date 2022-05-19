import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import services from '../services';

export default class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const task = req.body;
    const newTask = await services.task.createTask(task);
    return res.status(StatusCodes.OK).json(newTask);
  };

  static getAll = async (_req: Request, res: Response) => {
    const tasks = await services.task.getAllTasks();
    return res.status(StatusCodes.OK).json(tasks);
  };

  static updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fieldsToUpdate = req.body;
    const affectedRows = await services.task.updateTask(id, fieldsToUpdate);
  };
}
