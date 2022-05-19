import { Optional } from 'sequelize/types';

export default class TaskService {
  static createTask = async (task: Optional<any, string>) => {
    const createdTask = Task.create(task);
    return createdTask;
  };
}
