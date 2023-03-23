const express = require('express');
const messages = express.Router();

messages.get('/messages', (req, res) => {
  res.send('messages page');
});

module.exports = messages;