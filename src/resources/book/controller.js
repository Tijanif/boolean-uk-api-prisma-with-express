const prisma = require('../../utilities/dbClient');

// Get ALL books
const getAllBooks = (req, res) => {
  prisma.book.findMany().then((books) => {
    res.json({ books });
  });
};

module.exports = {
  getAllBooks,
};
