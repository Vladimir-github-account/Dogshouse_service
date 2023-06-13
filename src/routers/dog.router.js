import { Router }             from 'express';
import { createDog }          from '../controllers/dog.controller';
import { checkIntegerValues } from '../middlewares';

export const dogRouter = Router();

dogRouter.post('', checkIntegerValues, createDog);