const express = require("express");
const CategoryController = require("../controllers/category.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validateCategory } = require("../middleware/validation.middleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getById);
router.post("/", validateCategory, CategoryController.create);
router.put("/:id", validateCategory, CategoryController.update);
router.delete("/:id", CategoryController.delete);

module.exports = router;
