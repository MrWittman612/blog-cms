const express = require('express');
const {me} = require('./user.controllers');
const {
    login,
    register,
    protectedUserRoute,
} = require('../../utils/userAuthRoutes');

const router = express.Router();

// this module extends http://host/user

router.route('/').get(protectedUserRoute, me);

router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;
