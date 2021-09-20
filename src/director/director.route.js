import * as express from 'express';
import { DirectorController } from './director.controller.js';

const directorRouter = express.Router();

directorRouter.get('/', DirectorController.getAll);
directorRouter.get('/one/:age', DirectorController.getOneDirector);
directorRouter.get('/min_age', DirectorController.getYoungestOne);
directorRouter.post('/post', DirectorController.createOne);
directorRouter.patch('/patch', DirectorController.addMovie);

export default directorRouter;
