const Category = require('../../../models/category');

const getCategories = async () => {
  const categories = await Category.find();
  return categories;
};

module.exports = getCategories;
