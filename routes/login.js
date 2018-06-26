const LoginController = require('../controller/LoginController'),
      isLoggedIn = require('../util/isLoggedIn'),
      router = require('express').Router()

// Get all discount codes
.get('/', LoginController.getLogin)

// Create a discount code
.post('/', LoginController.postLogin);

module.exports = router;
