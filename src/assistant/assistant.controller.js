import assistantRouter from './assistant.route.js';
import {
  deleteAssistant,
  getAllAsistants,
  createAssistant,
  setAssistantToDirector,
} from './assistant.service.js';

export class AssistantController {
  static async getAll(req, res) {
    try {
      const assistants = await getAllAsistants();
      res.status(200).send(assistants);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  static async createOne(req, res) {

    const { name, age, experience, email, start } = req.body;
    if (!name || !age || !email || !start) {
      res.status(403).send('All the fields are required');
    }
    try {
      await createAssistant(name, age, email, start);


      res.status(201).send('created');
    } catch (error) {
      res.status(403).send(error.message);
    }
  }
  static async setAssistant(req, res) {
    const { assistantUuid, directorUuid } = req.body;
    if (!assistantUuid || !directorUuid) {
      return res.status(403).send('Both uuids are required');
    }
    try {
      await setAssistantToDirector(assistantUuid, directorUuid);
      res.status(200).send('assistant set to director');
    } catch (error) {
      res.status(404).send(error.message);
    }
  }

  static async deleteOne(req, res) {
    const name = req.body.name;
    if (!name) {
      res.status(403).send('Name is required');
    }
    try {
      await deleteAssistant(name);
      res.status(200).send(`Assistant ${name} is deleted`);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
}
