const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
