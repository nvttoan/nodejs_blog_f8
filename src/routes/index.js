const newsRouter = require('./news');
const pokemonRouter = require('./pokemon');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/pokemon', pokemonRouter);
  app.use('/', siteRouter);
}

module.exports = route;
