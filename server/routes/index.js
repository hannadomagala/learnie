const express = require('express');
const { extract } = require('article-parser');
const router = express.Router();

const url =
  'https://medium.com/better-programming/the-secret-to-being-a-top-developer-is-building-things-heres-a-list-of-fun-apps-to-build-aac61ac0736c';

router.get('/', async (req, res) => {
  const result = await extract(url, {
    YouTubeKey: 'AIzaSyCLBjYl-BLkXfBreQhHdII4TaHOs23rjZQ'
  });
  res.send(result);
});

module.exports = router;
