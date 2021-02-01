import {createContext, useContext} from 'react';

export const BlogContext = createContext();
BlogContext.displayName = BlogContext;

export function useBlogContext() {
    const blogContext = useContext(BlogContext);
    if (!blogContext) {
        throw new Error('This component must be a child of BlogProvider');
    }
    return blogContext;
}
