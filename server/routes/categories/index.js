const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Category = require('../../models/category');

// **** CONTROLLERS ****
const createCategory = require('./helpers/createCategory');
const getAllCategories = require('./helpers/getAllCategories');

// **** CRUD FOR CATEGORIES *****
router.get('/', async (req, res) => {
  const categories = await getAllCategories();

  if (!categories) {
    res.status(404).send('Sorry, but no categories available!');
    return;
  }
  res.send(categories);
});

router.post('/', async (req, res) => {
  // validation of users input
  const schema = {
    name: Joi.string()
      .min(1)
      .max(25),
    alias: Joi.string()
      .min(1)
      .max(25)
      .lowercase(),
    color: Joi.string()
      .min(1)
      .max(25),
    userID: Joi.string().min(1)
  };

  const result = Joi.validate(req.body, schema);

  // if there were problems with request send 400 response
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }

  const savedCategory = await createCategory(req.body);
  res.status(200).send(savedCategory);
});

router.delete('/', async (req, res) => {
  const categoryID = req.body.id;

  try {
    const category = await Category.findByIdAndDelete(categoryID);
    res.send(category);
    return;
  } catch (err) {
    res.status(400).send('There is no such category to delete!');
  }
});

// TODO:
// UPDATE

module.exports = router;
