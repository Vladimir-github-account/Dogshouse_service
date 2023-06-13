import { Router }    from 'express';
import { createDog } from '../controllers/dog.controller';

export const dogRouter = Router();

dogRouter.post('', createDog);