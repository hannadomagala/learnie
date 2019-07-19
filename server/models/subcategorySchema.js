const mongoose = require('mongoose');

// **** SUBCATEGORY SCHEMA ****
const subcategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  alias: { type: String, required: true }
});

module.exports = subcategorySchema;
