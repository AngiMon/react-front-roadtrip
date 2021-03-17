import * as types from '../constants/articleActionType'

export default function ArticleReducer(state = [], action){

    switch(action.type){
        case types.REQUEST_ARTICLES_SUCCESS:
            return action.articles; //new state
        
        default:
            return state
    }
}