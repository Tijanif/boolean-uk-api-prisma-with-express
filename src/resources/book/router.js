const booksRouter = require('express').Router();

const { getAllBooks, createABook, findOnebyId } = require('./controller');

// Get All Books
booksRouter.get('/', getAllBooks);

//  Find one book
booksRouter.get('/:id', findOnebyId);

//  Create a book
booksRouter.post('/', createABook);

module.exports = {
  booksRouter,
};
