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

// Find many

const findManyBooksByType = async (req, res) => {
  const types = req.params.type;
  const topics = req.query.topic;

  console.log(types);
  try {
    if (topics) {
      const books = await prisma.book.findMany({
        where: {
          type: types,
          topic: topics,
        },
      });
      res.json({ filteredBooksByTopic: books });
    } else {
      const books = await prisma.book.findMany({
        where: {
          type: types,
        },
      });
      res.json({ filteredBooksByType: books });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const findAuthor = async (req, res) => {
  const author = req.params.author;
  const authorName = req.query.name;

  console.log(author);
  console.log(authorName);

  try {
    if (authorName) {
      const authors = await prisma.book.findMany({
        where: {
          author: authorName,
        },
      });
      res.json({ filteredAuthors: authors });
    }
    // else {
    //   const books = await prisma.book.findMany({
    //     where: {
    //       type: types,
    //     },
    //   });
    //   res.json({ filteredBooksByType: books });
    // }
  } catch (error) {
    res.json({ error: error.message });
  }
};
module.exports = {
  getAllBooks,
  createABook,
  updateABook,
  findOnebyId,
  deleteById,
  findManyBooksByType,
  findAuthor,
};
