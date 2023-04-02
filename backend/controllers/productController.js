const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    let { category, subcategory, priceLow, priceHigh } = req.query;
    let filter = { isDeleted: false };
    if (category) {
      filter.categoryId = category;
    }
    if (subcategory) {
      filter.subCategoryId = subcategory;
    }
    if (priceLow && priceHigh) {
      filter.price = { $gte: priceLow, $lte: priceHigh };
    }
    const products = await Product.find(filter)
      .populate('categoryId')
      .populate('subCategoryId')
      .sort({ price: 1 })
      .exec();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id)
      .populate('categoryId')
      .populate('subCategoryId')
      .exec();
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const allowedUpdates = [
    'name',
    'description',
    'categoryId',
    'subCategoryId',
    'keywords',
    'sku',
    'price',
  ];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update),
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate('categoryId')
      .populate('subCategoryId')
      .exec();
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, {
      isDeleted: true,
    })
      .populate('categoryId')
      .populate('subCategoryId')
      .exec();
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};
