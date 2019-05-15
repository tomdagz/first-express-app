const express = require('express');

let registrationController = require('../controllers/registration');

let router = express.Router();

router.get('/signup', registrationController.new);

router.route('/users').post(registrationController.create);

module.exports = router;