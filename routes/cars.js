const express = require('express');
const cars = express.Router();
const car = require('../controllers/car')

cars.post('/addcar', car.carpost);

module.exports = cars;