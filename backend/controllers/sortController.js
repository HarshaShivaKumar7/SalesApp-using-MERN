const Product = require('../models/Product');

exports.sortProducts = async (req, res, next) => {
  try {
    const { category, subcategory } = req.query;
    const { sort } = req.params;

    const query = {};

    if (category) {
      query.categoryId = category;
    }

    if (subcategory) {
      query.subCategoryId = subcategory;
    }

    const sortQuery = {};

    switch (sort) {
      case 'low-to-high':
        sortQuery.price = 1;
        break;
      case 'high-to-low':
        sortQuery.price = -1;
        break;
      default:
        sortQuery.createdAt = -1;
        break;
    }

    const products = await Product.find(query).sort(sortQuery);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};
