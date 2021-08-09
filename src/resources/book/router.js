const booksRouter = require('express').Router();

const { getAllBooks } = require('./controller');

booksRouter.get('/', getAllBooks);

module.exports = {
  booksRouter,
};
