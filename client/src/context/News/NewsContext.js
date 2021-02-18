import {createContext, useContext} from 'react';

export const NewsContext = createContext();
NewsContext.displayName = NewsContext;

export function useNewsContext() {
    const newsContext = useContext(NewsContext);
    if (!newsContext) {
        throw new Error('This component must be a child of NewsProvider');
    }
    return newsContext;
}
