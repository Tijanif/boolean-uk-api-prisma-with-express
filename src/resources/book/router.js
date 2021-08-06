const booksRouter = require('express').Router;

const { getAllBooks, books } = require('./controller');

booksRouter.get('/', (req, res) => {
  res.json({ msg: 'okay' });
});

module.exports = {
  booksRouter,
};
