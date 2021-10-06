const express = require('express');
const router = express.Router()
const CitiesCtrl = require('../controllers/cities.controller')

router.get('/all', CitiesCtrl.getOneCity)
module.exports = router;