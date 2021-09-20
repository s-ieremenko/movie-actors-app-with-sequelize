import pkg from 'sequelize';
const { Sequelize, DataTypes, Model } = pkg;

import { sequelize } from '../sequelize.js';

const Actor = sequelize.define(
  'Actor',
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
    amploue: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default Actor;
