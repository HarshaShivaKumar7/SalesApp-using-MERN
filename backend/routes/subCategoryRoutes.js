const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const subCategoryController = require('../controllers/subCategoryController');

// Create a new subcategory
router.post('/', authMiddleware, subCategoryController.createSubCategory);

// Get all subcategories
router.get('/', subCategoryController.getAllSubCategories);

// Get a subcategory by ID
router.get('/:subCategoryId', subCategoryController.getSubCategoryById);

// Update a subcategory by ID
router.put('/:subCategoryId', authMiddleware, subCategoryController.updateSubCategoryById);

// Soft delete a subcategory by ID
router.delete('/:subCategoryId', authMiddleware, subCategoryController.deleteSubCategoryById);

module.exports = router;
