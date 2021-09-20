import Movie from './movie/movie.model.js';
import Actor from './actor/actor.model.js';
import Director from './director/director.model.js';
import Assistant from './assistant/assistant.model.js';

import { sequelize } from './sequelize.js';

export const makeRelations = () => {
  Director.hasOne(Assistant);
  Assistant.belongsTo(Director);

  Director.hasMany(Movie);
  Movie.belongsTo(Director);

  Movie.belongsToMany(Actor, {
    through: 'ActorMovies',
  });
  Actor.belongsToMany(Movie, {
    through: 'ActorMovies',
  });
};
