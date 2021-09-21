import { deleteAssistant, getAllAsistants } from './assistant.service.js';

export class AssistantController {
  static async getAll(req, res) {
    try {
      const assistants = await getAllAsistants();
      res.status(200).send(assistants);
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
