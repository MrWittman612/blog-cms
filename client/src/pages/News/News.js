import React from 'react';
import {
    CircularProgress,
    Container,
    CssBaseline,
    Grid,
} from '@material-ui/core';
import ArticleCard from '../../components/organisms/ArticleCard';
import NewsHeader from '../../components/templates/NewsHeader';
import {NewsProvider} from '../../context/News/NewsProvider';
import {useNewsContext} from '../../context/News/NewsContext';

const newsOptionLinks = [
    {title: 'World', url: '/news/world'},
    {title: 'Business', url: '/news/business'},
    {title: 'Sports', url: '/news/sports'},
    {title: 'Entertainment', url: '/news/entertainment'},
    {title: 'Auto', url: '/news/auto'},
    {title: 'Science', url: '/news/science'},
    {title: 'Health', url: '/news/health'},
    {title: 'Technology', url: '/news/technology'},
];

export function News() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='lg'>
                <NewsHeader title='Top News' buttonLinks={newsOptionLinks} />
                <Grid container spacing={4}>
                    <NewsProvider>
                        <NewsCardList />
                    </NewsProvider>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
function NewsCardList() {
    const {articles} = useNewsContext();
    return articles ? (
        articles.map((a) => <ArticleCard article={a} key={a.title} />)
    ) : (
        <CircularProgress />
    );
}
