import { Optional } from 'sequelize/types';
import Task from '../../database/models/task';
import { ITask } from '../interfaces/ITasks';

export default class TaskService {
  static createTask = async (task: Optional<any, string>) => {
    const createdTask = Task.create(task);
    return createdTask;
  };

  static getAllTasks = async () => {
    const tasks = Task.findAll();
    return tasks;
  };

  static updateTask = async (id: string, task: ITask) => {
    const newTask = await Task.findByPk(id);
    if (!newTask) return false;
    await newTask.update(task);
    return true;
  };

  static deleteTask = async (id: string) => {
    const deletedRows = await Task.destroy({ where: { id } });
    return deletedRows;
  };
}
