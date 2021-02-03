const {Blog} = require('../blog/Blog.model');

const getBlogs = async (req, res) => {
    try {
        const dbRes = await Blog.find();
        return res.send(dbRes);
    } catch (error) {
        console.error(error);
    }
};

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({_id: req.params.id});

        return res.send(blog);
    } catch (error) {
        console.error(error);
    }
};

const updateBlog = async (req, res) => {
    try {
        const dbRes = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.send(dbRes);
    } catch (error) {}
};

const createBlog = async (req, res) => {
    try {
        const dbRes = await Blog.create(req.body);

        return res.send(dbRes);
    } catch (error) {
        console.log(error);
    }
};

const deleteBlog = async (req, res) => {
    console.log(
        '🚀 ~ file: admin.blog.controllers.js ~ line 40 ~ deleteBlog ~ req',
        req.params.ids
    );
    let toDelete = {
        _id: {
            $in: req.params.ids,
        },
    };
    try {
        const dbRes = await Blog.deleteMany(toDelete);
        console.log(
            '🚀 ~ file: admin.blog.controllers.js ~ line 48 ~ deleteBlog ~ dbRes',
            dbRes
        );
        return res.send(dbRes);
    } catch (error) {}
};

const deleteBlogs = async (req, res) => {
    try {
        const idArr = req.body.params.ids;
        const dbRes = await Blog.deleteMany({
            _id: {
                $in: idArr,
            },
        });
        console.log(
            '🚀 ~ file: admin.blog.controllers.js ~ line 67 ~ deleteBlogs ~ dbRes',
            dbRes
        );
        return res.send(idArr);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    deleteBlogs,
};
