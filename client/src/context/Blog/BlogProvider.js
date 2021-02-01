import React, {useState, useCallback, useEffect} from 'react';
import Axios from 'axios';
import {BlogContext} from './BlogContext';

export function BlogProvider(props) {
    const [blogs, setBlogs] = useState([]);
    const featured = blogs.find((blog) => blog.featured === true);

    let value = {blogs, featured};

    const getBlogs = useCallback(async () => {
        try {
            const dbRes = await Axios.get('http://localhost:3001/api/blogs');
            setBlogs(dbRes.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getBlogs();
    }, [getBlogs]);

    return <BlogContext.Provider value={value} {...props} />;
}
