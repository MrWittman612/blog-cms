import {Grid, Typography, Box} from '@material-ui/core';
import React from 'react';
import {useBlogContext} from '../../../context/Blog/BlogContext';

export function HightLightedBlog() {
    const {blogs} = useBlogContext();

    return (
        <Grid container direction='column' style={{minHeight: '70vh'}}>
            <Grid item>
                <Box p={2}>
                    <Typography>Hight lighted</Typography>
                </Box>
            </Grid>
            <Grid item>
                {blogs &&
                    blogs.map((blog) => (
                        <Typography gutterBottom>{blog.title}</Typography>
                    ))}
            </Grid>
        </Grid>
    );
}
