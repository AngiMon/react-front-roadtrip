import {createSelector} from 'reselect'

const getAllArticles = (state) => state.articles;
const getOneArticle = (state) => state.article;

export const getArticles = createSelector(
    [getAllArticles],
    (articles) => {
        return articles;
    }
)

export const getArticle = createSelector(
    [getOneArticle],
    (article) => {
        return article;
    }
)