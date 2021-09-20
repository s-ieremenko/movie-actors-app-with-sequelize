import Actor from '../actor/actor.model.js';
import Director from '../director/director.model.js';
import Movie from './movie.model.js';

export const getAllMovies = async () => {
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
