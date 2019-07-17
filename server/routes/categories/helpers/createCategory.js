const Category = require('../../../models/category');

const createCategory = async categoryData => {
  const category = new Category({ ...categoryData });

  try {
    const result = await category.save();
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = createCategory;
