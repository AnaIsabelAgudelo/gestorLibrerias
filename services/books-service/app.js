const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

// Rutas
const booksRoutes = require('./routes/bookRouter.js');
app.use('/api/books', booksRoutes);

// Conexión a MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Books DB connected');
  app.listen(PORT, () => console.log(`Books service running on port ${PORT}`));
})
.catch((err) => console.error('DB connection error:', err));
