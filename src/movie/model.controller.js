import {
  getAllMoviesWithDirectorAndActors,
  createMovie,
  countMovieByDirector,
} from './movie.service.js';

export class MovieController {
  static async getAll(req, res) {
    try {
      const movies = await getAllMoviesWithDirectorAndActors();
      res.status(200).send(movies);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  static async createOne(req, res) {
    const { title, year, genre } = req.body;
    if (!title || !year || !genre) {
      res.status(403).send('All the fields required');
    }
    try {
      await createMovie(title, year, genre);
      res.status(201).send('Movie is created');
    } catch (error) {
      res.status(403).send('Bad request');
    }
  }

  static async countDirectorsMovie(req, res) {
    const directorName = req.body.directorName;
    if (!directorName) {
      return res.status(403).send('name required');
    }
    try {
      const amountOfMovies = await countMovieByDirector(directorName);
      res
        .status(200)
        .send(
          `Total amount of movies filmed by ${directorName} is ${amountOfMovies}`
        );
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
}
