const express = require('express');
const authrole = require('../middleware/authorise')
const authenticate = require('../middleware/authenticate')
const cars = express.Router();
const car = require('../controllers/car')


cars.get("/cars/:id",authenticate, car.carget)

cars.get("/cars",authenticate,authrole, car.carsget)

cars.post('/addcar', authenticate, car.carpost);

cars.patch("/ip-cars/:id",authenticate,authrole, car.carpatch)

cars.delete("/del-cars/:id",authenticate,authrole, car.cardelete)


module.exports = cars;