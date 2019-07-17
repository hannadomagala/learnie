const mongoose = require('mongoose');

// **** SCHEMA ****
const subcategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  alias: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// **** MODEL ****
const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;
