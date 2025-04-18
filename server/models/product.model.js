import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: {
        type: String
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: {
        type : String
    },
    imageUrl: {
        type : String
    },
    stock: { 
        type: Number, 
        default: 1 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const ProductModel = mongoose.model('product', productSchema)

export default ProductModel