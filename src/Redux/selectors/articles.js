import {createSelector} from 'reselect'
const getAllArticles = (state) => state.articles;

export const getArticles = createSelector(
    [getAllArticles],
    (articles) => {
        return articles;
    }
)