const {Blog} = require('./Blog.model');

const getBlogs = async (_req, res) => {
    try {
        const blogs = await Blog.find({});
        console.log('blogs:', blogs);

        return res.send(blogs);
    } catch (error) {
        console.error(error);
    }
};

const getBlog = async (req, res) => {
    console.log('getBlog reqParId:', req.params.id);
    try {
        const blog = await Blog.findOne({_id: req.params.id});
        console.log('getBlog dbRes:', blog);

        return res.send(blog);
    } catch (error) {
        console.error(error);
    }
};

const createBlog = async (req, res) => {
    console.log('createBlog fn req::', req.body);
    try {
        const blog = await Blog.create(req.body);
        return res.send(blog);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getBlogs, createBlog, getBlog};
