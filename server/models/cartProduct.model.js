import mongoose from 'mongoose';

const cartProductSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'product'
  },
  quantity: {
    type: Number,
    default: 1
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const CartProductModel = mongoose.model('cartProduct', cartProductSchema); // ⛔ Error! Schema name mismatch
export default CartProductModel;
