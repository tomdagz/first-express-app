const express = require('express');

let registrationController = require('../controllers/registration');

let router = express.Router();

router.get('/signup', registrationController.new);

module.exports = router;