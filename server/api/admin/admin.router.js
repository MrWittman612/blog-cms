const express = require('express');
const {getAdmins, createAdmin} = require('./admin.controllers');

const router = express.Router();

router.route('/').get(getAdmins).post(createAdmin);

module.exports = router;
