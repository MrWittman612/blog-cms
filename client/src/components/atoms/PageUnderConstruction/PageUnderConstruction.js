import React from 'react';
import image from '../../../assets/web-site-under-construction.jpg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    backgroundImage: `url('${image}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

export function PageUnderConstruction() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
