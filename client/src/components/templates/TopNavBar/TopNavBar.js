import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    AppBar: {
        padding: '0 16px',
    },
    toolbar: {
        flexWrap: 'wrap',
        fontFamily: 'cursive',
        letterSpacing: '0.1em',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

export function TopNavBar() {
    const classes = useStyles();
    return (
        <AppBar
            className={classes.AppBar}
            position='sticky'
            color='default'
            elevation={12}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    className={classes.toolbarTitle}
                    variant='h6'
                    color='inherit'
                    noWrap
                >
                    My Blog
                </Typography>
                <Button component={Link} to={'/News'}>
                    News
                </Button>
                <Button
                    component={Link}
                    to={'/Admin'}
                    variant='outlined'
                    style={{marginLeft: 12}}
                >
                    Admin
                </Button>
            </Toolbar>
        </AppBar>
    );
}
