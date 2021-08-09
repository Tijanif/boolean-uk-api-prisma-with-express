const booksRouter = require('express').Router();

const {
  getAllBooks,
  createABook,
  findOnebyId,
  deleteById,
  updateABook,
  findManyBooksByType,
  findAuthor,
} = require('./controller');

// Get All Books
booksRouter.get('/', getAllBooks);

//  Find one book
booksRouter.get('/:id', findOnebyId);

//  Create a book
booksRouter.post('/', createABook);

// Update book
booksRouter.patch('/:id', updateABook);

// Delete by id
booksRouter.delete('/:id', deleteById);

booksRouter.get('/type/:type', findManyBooksByType);

booksRouter.get('/author/:name', findAuthor);

module.exports = {
  booksRouter,
};
