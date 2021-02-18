import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

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

export function ArticleCard({article}) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <CardActionArea
                component='a'
                target='_blank'
                href={article.source_url}
            >
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component='h2' variant='h5'>
                                {article.title}
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                color='textSecondary'
                            >
                                {article.date}
                            </Typography>
                            <Typography variant='subtitle1' paragraph>
                                {article.content}
                            </Typography>
                            <Typography variant='subtitle1' color='primary'>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image={article.img}
                            title={article.title}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

ArticleCard.propTypes = {
    article: PropTypes.object,
};
