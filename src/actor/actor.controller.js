import {
  getAllActors,
  getOneActorByName,
  getAllByAmploue,
  createActor,
  addMovieForActor,
} from './actor.service.js';

export class ActorController {
  static async getAll(req, res) {
    try {
      const actors = await getAllActors();
      res.status(200).send(actors);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  static async getOne(req, res) {
    const name = req.params.name;
    if (!name) {
      res.status(403).send('Name required');
    }
    try {
      const actor = await getOneActorByName(name);
      res.status(200).send(actor);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
  static async getOneById(req, res) {
    const uuid = req.query.uuid;
    if (!uuid) {
      res.status(403).send('Uuid required');
    }
    try {
      const actor = await getOneActorByUuid();
      res.status(200).send(actor);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
  static async getAllByAmploue(req, res) {
    const amploue = req.body.amploue;
    if (!amploue) {
      res.status(403).send('Amploue required');
    }
    try {
      const actors = await getAllByAmploue(amploue);
      res.status(200).send(actors);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
  static async createActor(req, res) {
    const { name, amploue } = req.body;
    if (!name || !amploue) {
      res.status(403).send('Name and amploue required');
    }
    try {
      await createActor(name, amploue);
      res.status(201).send('Actor is created');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async updateActor(req, res) {
    const { movieUuid, actorUuid } = req.body;
    if (!movieUuid || !actorUuid) {
      res.status(403).send('Bad request');
    }
    try {
      await addMovieForActor(movieUuid, actorUuid);
      res.status(201).send('movie added');
    } catch (error) {
      res.status(403).send(error.message);
    }
  }
}
