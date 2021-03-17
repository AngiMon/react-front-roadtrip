import * as types from '../constants/articleActionType';
import {requestHeader} from '../actions/requestHeader'

//GET
export const requestArticlesLoad = () => ({
    type: types.REQUEST_ARTICLES_LOAD,
    loading: true
})
export const requestArticlesSuccess = (articles) => ({
    type: types.REQUEST_ARTICLES_SUCCESS,
    articles: articles,
    loading: false
})
export const requestArticlesError = (error) => ({
    type: types.REQUEST_ARTICLES_ERROR,
    loading: false,
})
/* thunk */
export const fetchArticles = () => {
    return async (dispatch) => {
		dispatch(requestArticlesLoad())
        
        let res = await requestHeader();
		if(!res) return; 
		let data =  await res.json();
		if(!data) return; 
		const {token} = data

		return fetch(
			`${process.env.REACT_APP_API_URI}/post/all`,
            {
                method: 'GET',
                headers: {'Authorization': token}
            }
		)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error - 404 Not Found')
			}

			return response.json()
		})
		.then((articles) => {
			dispatch(requestArticlesSuccess(articles))
		})
		.catch((error) => {
			console.log(error)
			dispatch(requestArticlesError(error))
		})
	}
}

//ADD
export const requestAddArticleLoad = () => ({
    type: types.REQUEST_ADD_ARTICLE_LOAD,
    
})
export const requestAddArticleSuccess = (article) => ({
    type: types.REQUEST_ADD_ARTICLE_SUCCESS,
	article: article
})
export const requestAddArticleError = (err) => ({
    type: types.REQUEST_ADD_ARTICLE_ERROR,
})
/* thunk */
export const addArticle = (title, content, location, token) => {
    return async (dispatch) => {
		//dispatch(requestAddArticleLoad())
console.log(title, content, location);
		return fetch(
			`${process.env.REACT_APP_API_URI}/post/add`, {
                method: 'POST',
                headers: {'Authorization': token, 'Content-Type': 'application/json', 'Accept': 'application/json'},
				body: JSON.stringify({
					title: title,
					content: content,
					location: location,
					published: true
				})
            }
		)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error - 404 Not Found')
			}

			return response.json()
		})
		.then((articles) => {
			dispatch(requestAddArticleSuccess(articles))
		})
		.catch((error) => {
			console.log(error)
			dispatch(requestAddArticleError(error))
		})
	}
}

