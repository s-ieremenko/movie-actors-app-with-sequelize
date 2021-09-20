import Movie from '../movie/movie.model.js';
import Director from './director.model.js';

export const getAllDirectors = async () => {
  const directors = await Director.findAll({
    include: {
      model: Movie,
      attributes: ['title', 'year'],
      // through: { attributes: [] },
    },
  });
  if (directors.length === 0) {
    throw new Error('No directors found');
  }
  return directors;
};

export const getOneDirectorByAge = async (age) => {
  const director = await Director.findOne({ where: { age } });
  return director;
};

export const getYoungestDirector = async () => {
  const age = await Director.min('age');
  const director = await Director.findOne({ where: { age } });
  return director;
};

export const createDirector = async (name, age) => {
  const existingDirector = await Director.findOne({ where: { name } });
  if (existingDirector) {
    throw new Error('Such a director already exists');
  }
  await Director.create({ name, age });
};

export const addMovieToDirector = async (directorUuid, movieUuid) => {
  const director = await Director.findByPk(directorUuid);
  const movie = await Movie.findByPk(movieUuid);
  if (!director || !movie) {
    throw new Error('invalid uuid');
  }
  await director.addMovie(movie);
};
