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
// const updateABook = (res, res) => {
//   const newinfo = req.body;
//   prisma.book
//     .update({
//       where: {
//         email: 'viola@prisma.io',
//       },
//       data: {
//         name: 'Viola the Magnificent',
//       },
//     })
//     .then((updated) => {
//       res.json({ updated });
//     });
// };

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
  findOnebyId,
  deleteById,
};
