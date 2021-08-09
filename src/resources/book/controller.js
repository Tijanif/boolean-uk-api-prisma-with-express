const prisma = require('../../utilities/dbClient');

// Get ALL books
const getAllBooks = (req, res) => {
  prisma.book.findMany().then((books) => {
    res.json({ books });
  });
};

// Find One By ID
const findOnebyId = (req, res) => {
  const id = Number(req.params.id);
  prisma.book
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((foundBook) => {
      res.json({ foundBook });
    });
};

// Create A Book
const createABook = (req, res) => {
  const newBook = req.body;
  prisma.book
    .create({
      data: {
        ...newBook,
      },
    })
    .then((newBook) => {
      res.json({ newBook });
    });
};

module.exports = {
  getAllBooks,
  createABook,
  findOnebyId,
};
