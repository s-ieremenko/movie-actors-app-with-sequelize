import { getAllMovies } from './movie.service.js';

export class MovieController {
  static async getAll(req, res) {
    try {
      const movies = await getAllMovies();
      res.status(200).send(movies);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
}
