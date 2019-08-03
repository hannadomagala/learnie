const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Category = require('../../models/category');

// **** CONTROLLERS ****
const createCategory = require('./helpers/createCategory');
const getAllCategories = require('./helpers/getAllCategories');
const addSubcategory = require('./helpers/addSubcategory');
const updateCategory = require('./helpers/updateCategory');

// **** CRUD FOR CATEGORIES *****
router.get('/', async (req, res) => {
  const categories = await getAllCategories();

  if (categories == false) {
    res.status(404).send('Sorry, but no categories available!');
    return;
  }
  res.status(200).send(categories);
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
    subcategory: Joi.object().keys({
      name: Joi.string()
        .min(1)
        .max(35),
      alias: Joi.string()
        .min(1)
        .max(35)
        .lowercase()
    }),
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

router.put('/:id', async (req, res) => {
  // TODO:
  // update subcategories

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
    subcategory: Joi.object().keys({
      name: Joi.string()
        .min(1)
        .max(25),
      alias: Joi.string()
        .min(1)
        .max(25)
        .lowercase()
    })
  };

  const result = Joi.validate(req.body, schema);

  // if there were problems with request send 400 response
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }
  const categoryID = req.params.id;
  const { subcategory, name, alias, color } = req.body;

  try {
    let message;

    if (subcategory) {
      // if subcategory was sent with request then add it
      message = await addSubcategory(categoryID, subcategory);
    }

    if (name || alias || color) {
      // if name, alias or color was sent with request then update
      message = await updateCategory(categoryID, name, alias, color);
    }

    if (!subcategory && !name && !alias && !color) {
      throw Error('There is nothing to update.');
    }
    res.send(message);
  } catch (err) {
    res.status(400).send(err.message || 'There is no category with given ID.');
  }
});

module.exports = router;
