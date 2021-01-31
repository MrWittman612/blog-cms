const express = require('express');
const {getBlogs, getBlog} = require('./blog.controllers');

const router = express.Router();

router.route('/').get(getBlogs);
router.route('/:id').get(getBlog);

module.exports = router;
