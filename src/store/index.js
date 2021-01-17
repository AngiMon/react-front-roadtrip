import {createStore, combineReducers} from 'redux';
import ArticlesReducer from './article/articlesReducer';

const store = createStore(
    combineReducers({
        articles: ArticlesReducer
    })
    ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//store.dispatch({type:ADD_ARTICLE_ACTION, payload:{}});

export default store;