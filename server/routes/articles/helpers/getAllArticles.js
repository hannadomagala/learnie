const Article = require('../../../models/article');

const getArticles = async () => {
  const articles = await Article.find();
  return articles;
};

module.exports = getArticles;
