const mongoose = require('mongoose');
const subcategorySchema = require('./subcategorySchema');

// **** CATEGORY SCHEMA ****
const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  alias: { type: String, required: true },
  color: { type: String, required: true },
  subcategories: [subcategorySchema],
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// **** MODEL ****
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
