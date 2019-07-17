const mongoose = require('mongoose');

// **** SCHEMA ****
const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  alias: { type: String, required: true },
  url: { type: String, required: true },
  description: String,
  image: String,
  author: { type: String },
  duration: Number,
  source: String,
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  userID: { type: String, required: true },
  checked: { type: Boolean, default: false }
});

// **** MODEL ****
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
