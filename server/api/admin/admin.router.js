const express = require('express');
const {getAdmins, createAdmin} = require('./admin.controllers');
const {getBlogs, createBlog} = require('../blog/blog.controllers');

const router = express.Router();

router.route('/').get(getAdmins).post(createAdmin);

router.route('/blogs').get(getBlogs).post(createBlog);

module.exports = router;
