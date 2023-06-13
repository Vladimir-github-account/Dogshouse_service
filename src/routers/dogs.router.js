import { Router }     from 'express';
import { getDogList } from '../controllers/dogs.controller';

export const dogsRouter = Router();

dogsRouter.get('', getDogList);