const Rental = require('../models/rentalModel');

exports.createRental = async (req, res) => {
  try {
    const rental = new Rental(req.body);
    await rental.save();
    res.status(201).json(rental);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.returnRental = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) return res.status(404).json({ error: 'Rental not found' });

    rental.returnedAt = new Date();
    await rental.save();

    res.json(rental);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
