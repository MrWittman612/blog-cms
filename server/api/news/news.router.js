const express = require('express');
const {getNews} = require('./news.controller');

const router = express.Router();

// this module extends http://host/api/news

router.route('/:categories').get(getNews);

module.exports = router;
