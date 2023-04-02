const Subcategory = require('../models/subcategory');

exports.createSubcategory = async (req, res) => {
  const subcategory = new Subcategory(req.body);
  try {
    await subcategory.save();
    res.status(201).send(subcategory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find({})
      .populate('categoryId')
      .exec();
    res.send(subcategories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSubcategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const subcategory = await Subcategory.findById(id)
      .populate('categoryId')
      .exec();
    if (!subcategory) {
      return res.status(404).send();
    }
    res.send(subcategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateSubcategory = async (req, res) => {
  const { id } = req.params;
  const allowedUpdates = ['name', 'description', 'categoryId', 'keywords'];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update),
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const subcategory = await Subcategory.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate('categoryId')
      .exec();
    if (!subcategory) {
      return res.status(404).send();
    }
    res.send(subcategory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteSubcategory = async (req, res) => {
  const { id } = req.params;
  try {
    const subcategory = await Subcategory.findByIdAndUpdate(id, {
      isDeleted: true,
    })
      .populate('categoryId')
      .exec();
    if (!subcategory) {
      return res.status(404).send();
    }
    res.send(subcategory);
  } catch (error) {
    res.status(500).send(error);
  }
};
