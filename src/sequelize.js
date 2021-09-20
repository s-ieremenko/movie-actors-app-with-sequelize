import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('movies', 'root', null, {
  dialect: 'mysql',
  host: 'localhost',
});
