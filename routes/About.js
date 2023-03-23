const express = require('express');
const about = express.Router();

about.get('/about', (req, res) => {
  res.send('about page');
});

module.exports = about;