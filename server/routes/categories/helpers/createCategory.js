const mongoose = require('mongoose');
const Category = require('../../../models/category');
const subcategorySchema = require('../../../models/subcategorySchema');
const Subcategory = mongoose.model('Subcategory', subcategorySchema);

const createCategory = async categoryData => {
  const { name, alias, color, subcategory, userID } = categoryData;

  const category = new Category({
    name,
    alias,
    color,
    userID,
    subcategories: [new Subcategory({ ...subcategory })]
  });

  try {
    const result = await category.save();
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = createCategory;
