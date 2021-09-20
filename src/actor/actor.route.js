import * as express from 'express';
import { Router } from 'express';
import { ActorController } from './actor.controller.js';
import Actor from './actor.model.js';

const actorRouter = express.Router();

actorRouter.get('/', ActorController.getAll);
actorRouter.get('/amploue', ActorController.getAllByAmploue);
actorRouter.get('/:name', ActorController.getOne);
actorRouter.get('/uuid', ActorController.getOneById);
actorRouter.post('/post', ActorController.createActor);
actorRouter.patch('/update', ActorController.updateActor);

export default actorRouter;
