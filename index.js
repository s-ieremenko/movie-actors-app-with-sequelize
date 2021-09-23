import express from 'express';

import Movie from './src/movie/movie.model.js';
import Actor from './src/actor/actor.model.js';
import Director from './src/director/director.model.js';
import Assistant from './src/assistant/assistant.model.js';

import { sequelize } from './src/sequelize.js';
import { makeRelations } from './src/relations.js';
import actorRouter from './src/actor/actor.route.js';
import directorRouter from './src/director/director.route.js';
import movieRouter from './src/movie/movie.route.js';
import assistantRouter from './src/assistant/assistant.route.js';

const app = express();

const port = 3000;

app.use(express.json());
app.use('/actor', actorRouter);
app.use('/director', directorRouter);
app.use('/movie', movieRouter);
app.use('/assistant', assistantRouter);

app.listen(port, () => {
  console.log(`Server starts listening on port ${port}`);
  sequelize.authenticate().then(async () => {
    try {
      makeRelations();
      await sequelize.sync({ alter: true });
    } catch (error) {
      console.log(error.message);
    }
  });
});
