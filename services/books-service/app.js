const express = require('express');
const app = express();
const bookRouter = require('./routes/bookRouter');

app.use('/api/books', bookRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
