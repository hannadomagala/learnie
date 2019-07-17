const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Article = require('../../models/article');

// **** CONTROLLERS ****
const getAllArticles = require('./controllers/getAllArticles');
const parseArticle = require('./controllers/parseArticle');
const createArticle = require('./controllers/createArticle');

// **** CRUD FOR ARTICLES *****
router.get('/', async (req, res) => {
  const articles = await getAllArticles();

  if (!articles) {
    res.status(404).send('Sorry, but no articles available!');
    return;
  }
  res.send(articles);
});

router.post('/', async (req, res) => {
  // validation of users input
  const schema = {
    url: Joi.string().regex(/^https?:\/\/(.*)/),
    user: Joi.string(),
    category: Joi.string()
      .min(2)
      .max(20),
    subcategory: Joi.string()
      .min(2)
      .max(20)
  };

  const result = Joi.validate(req.body, schema);

  // if there were problems with request send 400 response
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }

  // getting url from request and parse the article
  const { url: articleUrl, user, category, subcategory } = req.body;
  articleData = await parseArticle(articleUrl);

  // if there were problems with parsing URL, do not save it and send 400 response
  if (!articleData) {
    res.status(400).send('We had trouble with this url!');
    return;
  }

  const article = {
    ...articleData,
    userID: user,
    category: category,
    subcategory: subcategory
  };

  createArticle(article);
  res.status(200).send(article);
});

router.delete('/', async (req, res) => {
  const articleID = req.body.id;

  try {
    const article = await Article.findByIdAndDelete(articleID);
    res.send(article);
    return;
  } catch (err) {
    res.status(400).send('There is no such article to delete!');
  }
});

// TODO :
// UPDATE

module.exports = router;
