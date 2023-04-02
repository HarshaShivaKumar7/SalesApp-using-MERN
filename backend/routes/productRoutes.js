const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');

// Create a new product
router.post('/', authMiddleware, productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get a product by ID
router.get('/:productId', productController.getProductById);

// Update a product by ID
router.put('/:productId', authMiddleware, productController.updateProductById);

// Soft delete a product by ID
router.delete('/:productId', authMiddleware, productController.deleteProductById);

module.exports = router;
