import {
    Container,
    CssBaseline,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import FeaturedBlog from '../../components/organisms/FeaturedBlog';
import HightLightedBlog from '../../components/organisms/HightLightedBlog';
import TopNavBar from '../../components/templates/TopNavBar';
import {BlogProvider} from '../../context/Blog/BlogProvider';
const useStyles = makeStyles(() => ({
    main: {
        paddingTop: 60,
    },
}));
export function Blog() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <TopNavBar />
            <Container maxWidth='lg'>
                <BlogProvider>
                    <Container component='main' className={classes.main}>
                        <Grid container direction='row' spacing={8}>
                            <Grid item xs={8}>
                                <Paper variant='outlined'>
                                    <FeaturedBlog />
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper variant='outlined'>
                                    <HightLightedBlog />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </BlogProvider>
            </Container>
        </React.Fragment>
    );
}
