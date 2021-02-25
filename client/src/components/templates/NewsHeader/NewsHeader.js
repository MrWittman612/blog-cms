import {makeStyles, Button, Toolbar, Link, Typography} from '@material-ui/core';
import React, {Fragment} from 'react';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `2px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-around',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export function NewsHeader({title, buttonLinks}) {
    const classes = useStyles();
    return (
        <Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.toolbarTitle} component='h3'>
                    {title}
                </Typography>
                <Button component={RouterLink} to={'/'}>
                    blog
                </Button>
                <Button
                    component={RouterLink}
                    to={'/admin'}
                    variant='outlined'
                    style={{marginLeft: 12}}
                >
                    Admin
                </Button>
            </Toolbar>
            <Toolbar
                component='nav'
                variant='dense'
                className={classes.toolbarSecondary}
            >
                {buttonLinks.map((btn) => (
                    <Link
                        className={classes.toolbarLink}
                        noWrap
                        variant='body2'
                        key={btn.title}
                        component={RouterLink}
                        to={btn.url}
                        style={{marginLeft: 12}}
                    >
                        {btn.title}
                    </Link>
                ))}
            </Toolbar>
        </Fragment>
    );
}
