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

// Update a book
const updateABook = async (req, res) => {
  const newInfo = req.body;
  const id = Number(req.params.id);

  try {
    const foundItem = prisma.book.findUnique({
      where: {
        id: id,
      },
    });
    if (foundItem) {
      await prisma.book
        .update({
          where: {
            id: id,
          },
          data: {
            ...newInfo,
          },
        })
        .then((updated) => {
          res.json({ updated });
        });
    } else {
      res.json({ msg: 'This book id do not exist' });
    }
  } catch (error) {
    res.json((error) => {
      error.message;
    });
  }
};

// Delete a book by id
const deleteById = (req, res) => {
  const id = Number(req.params.id);
  prisma.book
    .delete({
      where: {
        id: id,
      },
    })
    .then((deletedItem) => {
      res.json({ deletedItem });
    });
};
module.exports = {
  getAllBooks,
  createABook,
  updateABook,
  findOnebyId,
  deleteById,
};
