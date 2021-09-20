import Actor from './actor.model.js';
import Movie from '../movie/movie.model.js';

export const getAllActors = async () => {
  const actors = Actor.findAll({
    include: {
      model: Movie,
      attributes: ['title'],
      through: { attributes: [] },
    },
  });
  if (actors.length === 0) {
    throw new Error('No actors found');
  }
  return actors;
};

export const getAllByAmploue = async (amploue) => {
  const actors = await Actor.findAll({
    where: { amploue },
  });
  if (!actors.length === 0) {
    throw new Error('No such actors with that amploue found');
  }
  return actors;
};

export const getOneActorByName = async (name) => {
  const actor = await Actor.findOne({
    where: { name },
  });
  console.log(actor);
  if (!actor) {
    throw new Error('No such an actor found');
  }
  return actor;
};

export const getOneByUuid = async (uuid) => {
  const actor = await Actor.findByPk(uuid);
  if (!actor) {
    throw new Error('No such an actor found');
  }
  return actor;
};
export const createActor = async (name, amploue) => {
  const actorExist = await Actor.findOne({
    where: {
      name,
      amploue,
    },
  });
  if (actorExist) {
    throw new Error('Such an actor already exists');
  }
  await Actor.create({
    name,
    amploue,
  });
};

export const addMovieForActor = async (movieUuid, actorUuid) => {
  const movie = await Movie.findByPk(movieUuid);
  const actor = await Actor.findByPk(actorUuid);
  if (!movie || !actor) {
    throw new Error('Wrong movieId or actorId');
  }
  await actor.addMovie(movie);
};
