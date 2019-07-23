const Article = require('../../../models/article');

const getArticles = async () => {
  const articles = await Article.find().populate('category');
  return articles;
};

module.exports = getArticles;
