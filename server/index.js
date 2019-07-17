const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const bodyParser = require('body-parser');
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

// **** ROUTERS ****
const articlesRouter = require('./routes/articles');
const categoriesRouter = require('./routes/categories');

// **** SERVER *****
app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // **** ENDPOINTS ****
    server.use('/api/articles', articlesRouter);
    server.use('/api/categories', categoriesRouter);

    // **** NEXT HANDLER ****
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });

    // **** CONNECTION TO DATABASE ****
    mongoose
      .connect('mongodb://localhost/learnie')
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Could not connect to MongoDB...', err));
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
