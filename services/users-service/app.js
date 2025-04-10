const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

// Rutas
const usersRoutes = require('./routes/userRouter.js');
app.use('/api/users', usersRoutes);

// Conexión a MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Users DB connected');
  app.listen(PORT, () => console.log(`Users service running on port ${PORT}`));
})
.catch((err) => console.error('DB connection error:', err));
