import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 280,
    },
});

export function ArticleCardSkeleton({article}) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <CardActionArea component='a'>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Skeleton
                                variant='text'
                                width='40%'
                                height='26px'
                            />
                            <Skeleton variant='text' width='20%' height='8px' />
                            <br />
                            <Skeleton
                                variant='text'
                                width='95%'
                                height='16px'
                            />
                            <Skeleton
                                variant='text'
                                width='85%'
                                height='16px'
                            />
                            <Skeleton
                                variant='text'
                                width='92%'
                                height='16px'
                            />
                            <Skeleton
                                variant='text'
                                width='70%'
                                height='16px'
                            />
                            <br />
                            <Skeleton
                                variant='text'
                                width='20%'
                                height='18px'
                            />
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <Skeleton
                            className={classes.cardMedia}
                            variant='rect'
                            height='280px'
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}
