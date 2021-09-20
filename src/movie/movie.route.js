import express, { Router } from 'express';
import { MovieController } from './model.controller.js';

const movieRouter = new Router();

movieRouter.get('/', MovieController.getAll);

export default movieRouter;
