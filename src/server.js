const express = require('express');
const morgan = require('morgan');
const { booksRouter } = require('./resources/book/router');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('*', (req, res) => {
  res.json({ msg: 'All Okay' });
});

app.use('/books', booksRouter);

const PORT = 4000;
// Listen
app.listen(PORT, () => {
  console.log(`I am running on localhost ${PORT}`);
});
