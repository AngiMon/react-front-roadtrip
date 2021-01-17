const initialState = [
    {
        id:1,
        title: "Premier article",
        content: "Salut les gens"
    },
    {
        id:2,
        title: "Deuxième article",
        content: "Encore salut les gens"
    }
]

export const ADD_ARTICLE_ACTION = "ADD_ARTICLE_ACTION";

export default function ArticlesReducer(state=initialState, action){
    switch(action.type){
        case ADD_ARTICLE_ACTION:
            return [...state, {}, ...action.payload]
        default:
            return state
    }
}