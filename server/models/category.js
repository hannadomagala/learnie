const mongoose = require('mongoose');

// **** SCHEMA ****
const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  alias: { type: String, required: true },
  color: { type: String, required: true },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// **** MODEL ****
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
