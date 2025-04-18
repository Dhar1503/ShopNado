import ProductModel from '../models/product.model.js'

import cloudinary from '../config/cloudinary.js';


export async function addProductController(req, res) {

    try {
        const { name, description, price, category, stock } = req.body;
        let imageUrl = "";
    
        if (req.file) {
          const result = await cloudinary.uploader.upload_stream(
            { folder: 'products' },
            (error, result) => {
              if (error) throw error;
              imageUrl = result.secure_url;
            }
          );
          req.file.stream.pipe(result);
        }
    
        const product = new ProductModel({
          name,
          description,
          price,
          category,
          stock,
          imageUrl
        });
    
        const saved = await product.save();
    
        res.status(201).json({
          message: "Product added",
          data: saved,
          success: true,
          error: false
        });
      } catch (error) {
        res.status(500).json({ message: error.message, success: false });
      }

  try {
    const { name, description, price, category, imageUrl, stock } = req.body

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required', success: false })
    }

    const product = new ProductModel({ name, description, price, category, imageUrl, stock })
    const saved = await product.save()

    res.status(201).json({
      message: 'Product added successfully',
      success: true,
      data: saved
    })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}

export async function getAllProductsController(req, res) {
  try {
    const products = await ProductModel.find()
    res.status(200).json({ success: true, data: products })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
}



