// Get ALL books
const getAllBooks = (req, res) => {
  const books = req.prisma.book.findMany();

  books.then((books) => {
    res.json({ books });
  });
};

// const books = req.prisma.book.findMany();
module.exports = {
  getAllBooks,
  // books,
};
