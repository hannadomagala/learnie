const Article = require('../../../models/article');

const getRandomArticles = async number => {
  return Article.aggregate()
    .lookup({
      from: 'categories',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    })
    .sample(8);
};

module.exports = getRandomArticles;
