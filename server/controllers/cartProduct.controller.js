import CartProductModel from '../models/cartProduct.model.js';

export async function addToCartProductController(req, res) {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "User ID and Product ID are required",
        success: false,
        error: true
      });
    }

    // Check if product already in cart
    const existingCart = await CartProductModel.findOne({ userId, productId });

    if (existingCart) {
      existingCart.quantity += quantity || 1;
      const updated = await existingCart.save();
      return res.status(200).json({
        message: "Cart updated",
        data: updated,
        success: true,
        error: false
      });
    }

    const cartItem = new CartProductModel({ userId, productId, quantity });
    const saved = await cartItem.save();

    return res.status(201).json({
      message: "Product added to cart",
      data: saved,
      success: true,
      error: false
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true
    });
  }
}

export async function getCartProductByUserController(req, res) {
  try {
    const { userId } = req.params;
    const cartItems = await CartProductModel.find({ userId }).populate('productId');

    return res.status(200).json({
      message: "Cart retrieved",
      data: cartItems,
      success: true,
      error: false
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true
    });
  }
}

