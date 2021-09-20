import pkg from 'sequelize';
const { Sequelize, DataTypes, Model } = pkg;

import { sequelize } from '../sequelize.js';

class Assistant extends Model {}

Assistant.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Assistant',
  }
);

export default Assistant;
