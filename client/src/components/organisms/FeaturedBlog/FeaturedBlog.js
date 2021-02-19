import {Grid, Typography, Box} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';
import React from 'react';
import {useBlogContext} from '../../../context/Blog/BlogContext';

export function FeaturedBlog() {
    const {featured} = useBlogContext();

    return (
        <Grid container direction='column' style={{minHeight: '70vh'}}>
            <Grid item>
                {featured ? (
                    <Box p={4} children={getBlogHtml()} />
                ) : (
                    <Skeleton animation='wave' />
                )}
            </Grid>
        </Grid>
    );

    function getBlogHtml() {
        return <div dangerouslySetInnerHTML={{__html: featured.content}} />;
    }
}
