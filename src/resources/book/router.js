const booksRouter = require('express').Router;

const { getAllBooks } = require('./controller');

booksRouter.get('/', (req, res) => {});

module.exports = {
  booksRouter,
};
