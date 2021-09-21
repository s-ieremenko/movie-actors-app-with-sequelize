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
      await sequelize.sync({ force: false });
      // const movie = await Movie.create({
      //   title: 'Avatar',
      //   year: 2000,
      //   genre: 'Fantasy',
      // });
      // const movie1 = await Movie.create({
      //   title: '5th Element',
      //   year: 2010,
      //   genre: 'Fantasy',
      // });
      // const actor = await Actor.create({
      //   name: 'Actor',
      //   amploue: 'Comic',
      // });
      // const actor2 = await Actor.create({
      //   name: 'Actor2',
      //   amploue: 'Comic',
      // });
      // const actor3 = await Actor.create({
      //   name: 'Actor3',
      //   amploue: 'Comic',
      // });
      // const director = await Director.create({
      //   name: 'Director',
      //   age: 35,
      // });
      // const director1 = await Director.create({
      //   name: 'Arnold',
      //   age: 55,
      // });
      // const assistant = await Assistant.create({
      //   name: 'Assistant',
      //   age: 22,
      // });

      // await director.setAssistant(assistant);
      // // console.log(await assistant.getDirector());
      // // await director.createAssistant({ name: 'Vasya', age: 20 });
      // await director.createMovie({
      //   title: 'Kolobok',
      //   year: 1999,
      //   genre: 'Fairytail',
      // });
      // await director.addMovies([movie]);
      // await movie1.setDirector(director1);

      // await movie.createActor({ name: 'Bruce Lee', amploue: 'tragic' });
      // await movie.addActor(actor);

      // await actor.addMovie(movie1);
    } catch (error) {
      console.log(error.message);
    }
  });
});
