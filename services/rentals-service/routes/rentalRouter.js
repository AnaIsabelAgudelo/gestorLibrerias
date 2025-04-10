const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('✅ Rentals route working!');
});

module.exports = router;
