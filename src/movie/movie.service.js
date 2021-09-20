import Actor from '../actor/actor.model.js';
import Director from '../director/director.model.js';
import Movie from './movie.model.js';

export const getAllMoviesWithDirectorAndActors = async () => {
  const movies = await Movie.findAll({
    attributes: ['title', 'year'],
    include: [
      {
        model: Director,
        attributes: ['name'],
      },
      {
        model: Actor,
        attributes: ['name'],
        through: { attributes: [] },
      },
    ],
  });
  if (movies.length === 0) {
    throw new Error('No movies here');
  }
  return movies;
};

export const createMovie = async (title, year, genre) => {
  await Movie.create({ title, year, genre });
};
