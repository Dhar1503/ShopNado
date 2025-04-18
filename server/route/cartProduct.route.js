import { Router } from 'express';
import { addToCartProductController, getCartProductByUserController } from '../controllers/cartProduct.controller.js';

const cartProductRouter = Router();

cartProductRouter.post('/add', addToCartProductController);
cartProductRouter.get('/:userId', getCartProductByUserController);

export default cartProductRouter;
