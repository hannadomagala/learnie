const mongoose = require('mongoose');
const Category = require('../../../models/category');
const subcategorySchema = require('../../../models/subcategorySchema');
const Subcategory = mongoose.model('Subcategory', subcategorySchema);

const addSubcategory = async (categoryID, subcategoryData) => {
  try {
    //find category to update
    const category = await Category.findById(categoryID);

    //if no category with given ID throw error
    if (!category) {
      throw Error('No category found!');
    }

    //create new subcategory and update category with it
    const subcategory = new Subcategory(subcategoryData);
    category.subcategories.push(subcategory);
    const result = await category.save();
    return result;
  } catch (err) {
    return err.message;
  }
};

module.exports = addSubcategory;
