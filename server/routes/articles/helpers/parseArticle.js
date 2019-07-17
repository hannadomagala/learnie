const { extract } = require('article-parser');

const parseArticle = async articleUrl => {
  try {
    // using article-parser to get article info
    const result = await extract(articleUrl, {
      YouTubeKey: 'AIzaSyCLBjYl-BLkXfBreQhHdII4TaHOs23rjZQ'
    });

    // destructuring the result to export only useful info
    const { title, alias, url, description, author, image, source } = result;
    let { duration } = result;

    // transforming duration from seconds to minutes
    duration = Math.round(duration / 60);

    // if parser couldn't get title, alias or url we consider article as invalid
    if (!title || !alias || !url) {
      throw new Error('Url is not valid, or is not an article or yt.');
    }

    return {
      title,
      alias,
      url,
      description,
      image,
      author,
      duration,
      source
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = parseArticle;
