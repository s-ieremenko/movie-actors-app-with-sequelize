import express from 'express';
import { AssistantController } from './assistant.controller.js';

const assistantRouter = express.Router();

assistantRouter.get('/', AssistantController.getAll);
assistantRouter.delete('/delete', AssistantController.deleteOne);

export default assistantRouter;
