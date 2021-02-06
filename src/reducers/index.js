import {combineReducers} from 'redux'
import ArticleReducer from './articleReducer'

const rootReducer = combineReducers({
    articles: ArticleReducer
})

export default rootReducer;