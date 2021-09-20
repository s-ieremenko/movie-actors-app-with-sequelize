import pkg from 'sequelize';
const { Sequelize, DataTypes, Model } = pkg;

import { sequelize } from '../sequelize.js';

const Movie = sequelize.define(
  'Movie',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    modelName: 'Movie',
  }
);

export default Movie;
