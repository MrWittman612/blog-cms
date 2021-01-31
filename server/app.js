'use strict';
const express = require('express');
const app = express();
const admin = express();
const {connectMongoDB} = require('./utils/connectMongoDB');
const userRouter = require('./api/user/user.router');
const blogRouter = require('./api/blog/blog.router');
const adminRouter = require('./api/admin/admin.router');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
admin.use(express.json());
admin.use(express.urlencoded({extended: true}));

connectMongoDB();

app.use('/api/user', userRouter);

app.use('/api/blog', blogRouter);

admin.use('/', adminRouter);

function start() {
    app.listen(port, () => console.log('server started'));
    admin.listen(5000, console.log('admin started'));
}

exports.start = start;
