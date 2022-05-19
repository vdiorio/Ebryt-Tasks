import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import services from '../services';

export default class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const task = req.body;
    const newTask = await services.task.createTask(task);
    return res.status(StatusCodes.OK).json(newTask);
  };

  static updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fieldsToUpdate = req.body;
    const task = await services.task.updateTask(id, fieldsToUpdate);
    return res.status(StatusCodes.OK).json(task);
  };
}
