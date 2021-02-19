import {
    Grid,
    Typography,
    Box,
    List,
    ListItemText,
    ListItem,
} from '@material-ui/core';
import React from 'react';
import {useBlogContext} from '../../../context/Blog/BlogContext';

export function HightLightedBlog() {
    const {blogs} = useBlogContext();

    return (
        <Grid
            container
            direction='column'
            style={{minHeight: '70vh', padding: '16px'}}
        >
            <Grid item>
                <Box pb={3}>
                    <Typography>High lighted</Typography>
                </Box>
            </Grid>
            <Grid item>
                <List>
                    {blogs &&
                        blogs.map((blog) => (
                            <ListItem button>
                                <ListItemText primary={blog.title} />
                            </ListItem>
                        ))}
                </List>
            </Grid>
        </Grid>
    );
}
