const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

// Rutas
const rentalsRoutes = require('./routes/rentalRouter.js');
app.use('/api/rentals', rentalsRoutes);

// Conexión a MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Rentals DB connected');
  app.listen(PORT, () => console.log(`Rentals service running on port ${PORT}`));
})
.catch((err) => console.error('DB connection error:', err));
