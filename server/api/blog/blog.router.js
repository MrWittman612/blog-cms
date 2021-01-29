const express = require('express');
const {getBlogs, createBlog} = require('./blog.controllers');

const router = express.Router();

router.route('/').get(getBlogs).post(createBlog);

module.exports = router;
