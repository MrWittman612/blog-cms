import React from 'react';
import { makeStyles } from '@material-ui/core';
import FourOFourImage from '../../../assets/404-page.png';

const useStyle = makeStyles(() => ({
  root: {
    height: '100vh',
    backgroundImage: `url('${FourOFourImage}')`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export function FourOFour() {
  const classes = useStyle();
  return <div className={classes.root}></div>;
}
