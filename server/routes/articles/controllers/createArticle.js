const Article = require('../../../models/article');

const createArticle = async articleData => {
  const article = new Article({ ...articleData });

  try {
    const result = await article.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = createArticle;
