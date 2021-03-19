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
	status: 200,
    loading: false
})
export const requestArticlesError = (status) => ({
    type: types.REQUEST_ARTICLES_ERROR,
	status: status,
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
export const fetchArticlesAsAdmin = (token) => {
    return async (dispatch) => {
		dispatch(requestArticlesLoad())

		return fetch(
			`${process.env.REACT_APP_API_URI}/dashboard/post/all`,
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
		.then(({status, articles}) => {
			if(status === 409) {
				dispatch(requestArticlesError(status))
			}else{
				dispatch(requestArticlesSuccess(articles))
			}
		})
		.catch((error) => {
			console.log(error)
			dispatch(requestArticlesError(error))
		})
	}
}
//GET ONE
export const requestArticleLoad = () => ({
    type: types.REQUEST_ARTICLE_LOAD,
    loading: true
})
export const requestArticleSuccess = (article) => ({
    type: types.REQUEST_ARTICLE_SUCCESS,
    article: article,
	status: 200,
    loading: false
})
export const requestArticleError = (status) => ({
    type: types.REQUEST_ARTICLE_ERROR,
	status: status,
    loading: false,
})
export const fetchArticle = (token, id) => {
	return async (dispatch) => {
		//dispatch(requestArticlesLoad())

		return fetch(
			`${process.env.REACT_APP_API_URI}/dashboard/post/${id}`,
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
		.then(({status, article}) => {
			if(status === 409) {
				//dispatch(requestArticleError(status))
			}else{
				dispatch(requestArticleSuccess(article))
			}
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
export const requestAddArticleError = (status) => ({
    type: types.REQUEST_ADD_ARTICLE_ERROR,
	status: status,
    loading: false,
})
/* thunk */
export const addArticle = (title, content, location, token) => {
    return async (dispatch) => {
		//dispatch(requestAddArticleLoad())

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
		.then(({status}, articles) => {
			if(status === 409) {
				dispatch(requestAddArticleError(status))
			}else{
				dispatch(requestAddArticleSuccess(articles))
			}
		})
		.catch((error) => {
			console.log(error)
			dispatch(requestAddArticleError(error))
		})
	}
}
//update
export const requestUpdateArticleLoad = () => ({
    type: types.REQUEST_UPDATE_ARTICLE_LOAD,
    
})
export const requestUpdateArticleSuccess = (article) => ({
    type: types.REQUEST_UPDATE_ARTICLE_SUCCESS,
	article: article
})
export const requestUpdateArticleError = (status) => ({
    type: types.REQUEST_UPDATE_ARTICLE_ERROR,
	status: status,
    loading: false,
})
/* thunk */
export const updateArticle = (id, title, content, location, token) => {
    return async (dispatch) => {
		//dispatch(requestAddArticleLoad())

		return fetch(
			`${process.env.REACT_APP_API_URI}/post/${id}`, {
                method: 'PUT',
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
			return response.json()
		})
		.then(({status, errorMessage}, article) => {
			if(status === 409) {
				//dispatch(requestUpdateArticleError(status))
			}else if(status === 200){
				//dispatch(requestUpdateArticleSuccess(article))
			}else{
				throw new Error(errorMessage);
			}
		})
		.catch((error) => {
			console.log(error)
			//dispatch(requestUpdateArticleError(error))
		})
	}
}
//delete article
export const requestRemoveArticleLoad = () => ({
    type: types.REQUEST_REMOVE_ARTICLE_LOAD,
    
})
export const requestRemoveArticleSuccess = (articleId) => ({
    type: types.REQUEST_REMOVE_ARTICLE_SUCCESS,
	articleId: articleId,
	status:200
})
export const requestRemoveArticleError = (status) => ({
    type: types.REQUEST_REMOVE_ARTICLE_ERROR,
	status: status,
    loading: false,
})
//thunk
export const removeArticles = (token, articleId) => {
    return async (dispatch) => {
		//dispatch(requestRemoveArticleLoad())

		return fetch(
			`${process.env.REACT_APP_API_URI}/post/${articleId}`,
            {
                method: 'DELETE',
                headers: {'Authorization': token}
            }
		)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error - 404 Not Found')
			}

			return response.json()
		})
		.then((res) => {
			dispatch(requestRemoveArticleSuccess(articleId))
		})
		.catch((error) => {
			console.log(error)
			//dispatch(requestRemoveArticleError(error))
		})
	}
}

