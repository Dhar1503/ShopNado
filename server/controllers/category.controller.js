import CategoryModel from '../models/category.model.js';

export async function addCategoryController(req, res) {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Category name is required",
        success: false,
        error: true
      });
    }

    const existing = await CategoryModel.findOne({ name });

    if (existing) {
      return res.status(400).json({
        message: "Category already exists",
        success: false,
        error: true
      });
    }

    const category = new CategoryModel({ name, description });
    const saved = await category.save();

    res.status(201).json({
      message: "Category added",
      data: saved,
      success: true,
      error: false
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: true
    });
  }
}

export async function getAllCategoriesController(req, res) {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json({
      message: "Categories fetched",
      data: categories,
      success: true,
      error: false
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: true
    });
  }
}
