const Category = require('../../../models/category');

const updateCategory = async (categoryID, name, alias, color) => {
  try {
    //find category to update
    const category = await Category.findById(categoryID);

    //if no category with given ID throw error
    if (!category) {
      throw Error('No category found!');
    }

    //check if name, alias or color is sent, and update if it is
    if (name) category.name = name;
    if (alias) category.alias = alias;
    if (color) category.color = color;

    const result = await category.save();
    return result;
  } catch (err) {
    return err.message;
  }
};

module.exports = updateCategory;
