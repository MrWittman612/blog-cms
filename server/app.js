'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const admin = express();
const {connectMongoDB} = require('./utils/connectMongoDB');
const userRouter = require('./api/user/user.router');
const blogRouter = require('./api/blog/blog.router');
const newsRouter = require('./api/news/news.router');
const adminRouter = require('./api/admin/admin.router');
const port = process.env.PORT || 3001;

const jsonParser = express.json();

app.use(cors());
app.use(jsonParser);
app.use(express.urlencoded({extended: true}));
admin.use(cors());
admin.use(jsonParser);
admin.use(express.urlencoded({extended: true}));
// const urlencodedParser = express.urlencoded({extended: false});

connectMongoDB();

app.use('/api/user', userRouter);

app.use('/api/blogs', blogRouter);


app.use('/api/news', newsRouter);

admin.use('/admin/api', adminRouter);
// app.use('/api/admin', admin);

function start() {
    app.listen(port, () => console.log('server started'));
    admin.listen(5000, console.log('admin started'));
}

exports.start = start;
