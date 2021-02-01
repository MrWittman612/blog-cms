import {Grid, Typography, Box} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';
import React from 'react';
import {useBlogContext} from '../../../context/Blog/BlogContext';

export function FeaturedBlog() {
    const {featured} = useBlogContext();

    return (
        <Grid container direction='column' style={{minHeight: '70vh'}}>
            <Grid item style={{borderBottom: '1px solid lightgrey'}}>
                <Box p={4}>
                    <Typography>
                        {featured ? (
                            featured.title
                        ) : (
                            <Skeleton animation='wave' />
                        )}
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box p={4}>
                    <Typography>
                        {featured ? (
                            featured.content
                        ) : (
                            <Skeleton animation='wave' />
                        )}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
