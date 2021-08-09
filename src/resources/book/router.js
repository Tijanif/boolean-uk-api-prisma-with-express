const booksRouter = require('express').Router();

const {
  getAllBooks,
  createABook,
  findOnebyId,
  deleteById,
} = require('./controller');

// Get All Books
booksRouter.get('/', getAllBooks);

//  Find one book
booksRouter.get('/:id', findOnebyId);

//  Create a book
booksRouter.post('/', createABook);

// Delete by id
booksRouter.delete('/:id', deleteById);

module.exports = {
  booksRouter,
};
