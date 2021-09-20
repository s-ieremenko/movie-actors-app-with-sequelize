import {
  getAllMoviesWithDirectorAndActors,
  createMovie,
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
}
