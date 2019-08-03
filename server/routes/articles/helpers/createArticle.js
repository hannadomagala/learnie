const Article = require('../../../models/article');

const createArticle = async articleData => {
  const article = new Article({ ...articleData });

  try {
    const result = await article.save();
    const savedArticle = await Article.findById(result._id).populate(
      'category'
    );
    return savedArticle;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = createArticle;
