const express = require('express');
const {getAdmins, createAdmin, register} = require('./admin.controllers');
const {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    deleteBlogs,
} = require('./admin.blog.controllers');
const {
    adminLogin,
    getAdmin,
    registerAdmin,
    protectedAdminRoute,
} = require('./admin.controllers');

const router = express.Router();

router.route('/login').post(adminLogin);
router.route('/register').post(registerAdmin);
router.route('/').get(protectedAdminRoute, getAdmin);

router
    .route('/blogs/:id')
    .get(getBlogs)
    .put(updateBlog)
    .post(createBlog)
    .delete(deleteBlog);

router.route('/blogs').get(getBlogs).post(createBlog).delete(deleteBlogs);

module.exports = router;
