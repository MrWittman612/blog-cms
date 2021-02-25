import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {NewsContext} from './NewsContext';
import {useRouteMatch, useLocation} from 'react-router-dom';

const useStableRouteMatch = () => {
    const _match = useRouteMatch('/news/:newsOptions');
    const location = useLocation();
    const [match, setMatch] = useState(_match);
    useEffect(() => {
        setMatch(_match);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return match;
};

export function NewsProvider(props) {
    const [articles, setArticles] = useState(null);
    const match = useStableRouteMatch();
    let value = {articles};

    useEffect(() => {
        console.log('useEffect ran');
        const getNews = async () => {
            console.log('I ran');
            try {
                const uri = `/api/news/${
                    match === null ? 'entertainment' : match.params.newsOptions
                }`;

                const newsArticles = await Axios.get(uri);

                setArticles(newsArticles.data);
            } catch (error) {
                console.log(error);
            }
        };

        getNews();
    }, [match]);

    return <NewsContext.Provider value={value} {...props} />;
}
