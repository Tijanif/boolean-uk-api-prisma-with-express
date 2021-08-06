const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));

// Routes

app.get('*', (req, res) => {
  res.json({ msg: 'All Okay' });
});

const PORT = 4000;
// Listen
app.listen(PORT, () => {
  console.log(`I am running on localhost ${PORT}`);
});
