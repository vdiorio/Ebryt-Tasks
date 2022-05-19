import {DataTypes, Model} from 'sequelize';
import db from '.';

class Task extends Model {
  public title!: string;

  public status!: string;
}

Task.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Task',
  tableName: 'Tasks',
  timestamps: true,
});

export default Task;
