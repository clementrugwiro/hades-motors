const express = require('express');
const authrole = require('../middleware/authorise')
const authenticate = require('../middleware/authenticate')
const adverts = express.Router();
const advert = require('../controllers/advert')


adverts.get("/adverts/:id",authenticate, advert.advertget)

adverts.get("/adverts",authenticate,authrole, advert.advertsget)

adverts.post('/addadvert', authenticate, advert.advertpost);

adverts.patch("/ip-adverts/:id",authenticate,authrole, advert.advertpatch)

adverts.delete("/del-adverts/:id",authenticate,authrole, advert.advertdelete)


module.exports = adverts;