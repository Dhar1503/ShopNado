import { Router } from 'express';
import { addProductController, getAllProductsController } from '../controllers/product.controller.js';
import upload from '../middleware/multer.js';

const productRouter = Router();

productRouter.post('/add', addProductController);
productRouter.get('/all', getAllProductsController);
productRouter.post('/add', upload.single('image'), addProductController);

export default productRouter;
