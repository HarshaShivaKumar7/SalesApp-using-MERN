const Product = require('../models/Product');

exports.filterProducts = async (req, res, next) => {
  try {
    const { category, subcategory, priceLow, priceHigh } = req.query;

    const query = {};

    if (category) {
      query.categoryId = category;
    }

    if (subcategory) {
      query.subCategoryId = subcategory;
    }

    if (priceLow && priceHigh) {
      query.price = { $gte: priceLow, $lte: priceHigh };
    } else if (priceLow) {
      query.price = { $gte: priceLow };
    } else if (priceHigh) {
      query.price = { $lte: priceHigh };
    }

    const products = await Product.find(query);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};
