const Category = require("../models/category.model");

class CategoryController {
  static async getAll(req, res) {
    try {
      const categories = await Category.getAll(req.user.id);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const category = await Category.getById(req.params.id, req.user.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { name, icon } = req.body;
      const category = await Category.create({
        name,
        icon,
        user_id: req.user.id,
      });
      res.status(201).json(category[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { name, icon } = req.body;
      const category = await Category.update(req.params.id, req.user.id, {
        name,
        icon,
      });
      if (!category.length) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const result = await Category.delete(req.params.id, req.user.id);
      if (!result) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CategoryController;
