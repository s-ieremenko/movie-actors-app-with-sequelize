import pkg from 'sequelize';
const { Sequelize, DataTypes, Model } = pkg;

import { sequelize } from '../sequelize.js';

class Director extends Model {}

Director.init(
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
    modelName: 'Director',
  }
);

export default Director;
