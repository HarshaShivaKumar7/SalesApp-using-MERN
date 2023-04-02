const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const categoryController = require('../controllers/categoryController');

// Create a new category
router.post('/', authMiddleware, categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get a category by ID
router.get('/:categoryId', categoryController.getCategoryById);

// Update a category by ID
router.put('/:categoryId', authMiddleware, categoryController.updateCategoryById);

// Soft delete a category by ID
router.delete('/:categoryId', authMiddleware, categoryController.deleteCategoryById);

module.exports = router;
