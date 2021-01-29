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

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        return res.send(blog);
    } catch (error) {
        console.log(error);
    }
};

exports.getBlogs = getBlogs;

exports.createBlog = createBlog;
