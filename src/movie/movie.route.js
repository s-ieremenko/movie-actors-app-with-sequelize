import express, { Router } from 'express';
import { MovieController } from './model.controller.js';

const movieRouter = new Router();

movieRouter.get('/', MovieController.getAll);
movieRouter.get('/count', MovieController.countDirectorsMovie);
movieRouter.post('/post', MovieController.createOne);

export default movieRouter;
