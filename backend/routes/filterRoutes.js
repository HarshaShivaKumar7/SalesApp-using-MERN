const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Filter products by category
router.get('/category/:categoryId', productController.getProductsByCategory);

// Filter products by subcategory
router.get('/subcategory/:subCategoryId', productController.getProductsBySubCategory);

// Filter products by price range
router.get('/price', productController.getProductsByPriceRange);

module.exports = router;
