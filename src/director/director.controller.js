import {
  getAllDirectors,
  getOneDirectorByAge,
  getYoungestDirector,
  createDirector,
  addMovieToDirector,
} from './director.service.js';

export class DirectorController {
  static async getAll(req, res) {
    try {
      const directors = await getAllDirectors();
      res.status(200).send(directors);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  static async getOneDirector(req, res) {
    const age = req.params.age;
    if (!age) {
      res.status(403).send('Age required');
    }
    try {
      const director = await getOneDirectorByAge(age);
      res.status(200).send(director);
    } catch (error) {
      res.status(403).send(error.message);
    }
  }

  static async getYoungestOne(req, res) {
    try {
      const director = await getYoungestDirector();
      res.status(200).send(director);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  static async createOne(req, res) {
    const { name, age } = req.body;
    if (!name || !age) {
      res.status(403).send('name and age required');
    } else {
      try {
        await createDirector(name, age);
        res.status(201).send('Director created');
      } catch (error) {
        res.status(403).send(error.message);
      }
    }
  }
  static async addMovie(req, res) {
    const { directorUuid, movieUuid } = req.body;
    if (!directorUuid || !movieUuid) {
      throw new Error('Both ids are required');
    }
    try {
      await addMovieToDirector(directorUuid, movieUuid);
      res.status(200).send('movie is added');
    } catch (error) {
      res.status(403).send(error.message);
    }
  }
}
