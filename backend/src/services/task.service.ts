import { Optional } from 'sequelize/types';

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
}
