import * as types from '../constants/articleActionType'

export default function ArticleReducer(state = [], action){
    switch(action.type){
        case types.REQUEST_ARTICLES_SUCCESS:
            return {articles: action.articles, status:action.status}; //new state

        case types.REQUEST_ARTICLE_SUCCESS:
            return {article: action.article};

        case types.REQUEST_ARTICLES_ERROR:
        case types.REQUEST_ADD_ARTICLE_ERROR:
            return {articles: [], status:action.status}

        case types.REQUEST_REMOVE_ARTICLE_SUCCESS:
            let articles = [];
            state.articles.forEach( article => {
                if(article.id !== action.articleId)
                    articles.push(article);
            })
            return {articles: articles, status:action.status};
            
        default:
            return {articles: [], status:200}
    }
}