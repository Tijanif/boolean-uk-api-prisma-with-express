// Get ALL books
const getAllBooks = (req, res) => {
  const books = req.prisma.book.findMany();

  books.then((books) => {
    res.json({ books });
  });
};

module.exports = {
  getAllBooks,
};
