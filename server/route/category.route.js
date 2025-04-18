import { Router } from 'express';
import { addCategoryController, getAllCategoriesController } from '../controllers/category.controller.js';

const categoryRouter = Router();

categoryRouter.post('/add', addCategoryController);
categoryRouter.get('/all', getAllCategoriesController);

export default categoryRouter;
