import {makeStyles, Button, Toolbar, Typography} from '@material-ui/core';
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

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
}));

export function NewsHeader({title, buttonLinks}) {
    const classes = useStyles();
    return (
        <Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.toolbarTitle} component='h3'>
                    {title}
                </Typography>
                <Button component={Link} to={'/'}>
                    blog
                </Button>
                <Button
                    component={Link}
                    to={'/admin'}
                    variant='outlined'
                    style={{marginLeft: 12}}
                >
                    Admin
                </Button>
            </Toolbar>
            <Toolbar className={classes.toolbarSecondary}>
                {buttonLinks.map((btn) => (
                    <Button
                        key={btn.title}
                        component={Link}
                        to={btn.url}
                        style={{marginLeft: 12}}
                    >
                        {btn.title}
                    </Button>
                ))}
            </Toolbar>
        </Fragment>
    );
}
