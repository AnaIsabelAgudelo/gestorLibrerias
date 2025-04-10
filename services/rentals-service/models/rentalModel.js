const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  bookId: { type: String, required: true },
  rentedAt: { type: Date, default: Date.now },
  returnedAt: { type: Date }
});

module.exports = mongoose.model('Rental', rentalSchema);
