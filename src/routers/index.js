import { Router } from 'express';
import categoriesRouter from './categories.js';

const router = Router();

router.use('/categories', categoriesRouter);

export default router;
