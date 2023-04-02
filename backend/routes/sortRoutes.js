const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Sort products by price
router.get('/price', productController.sortProductsByPrice);

// Sort products by other criteria
router.get('/:criteria', productController.sortProductsByCriteria);

module.exports = router;
