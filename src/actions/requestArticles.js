import * as types from '../constants/articleActionType';
import * as APIConfig from '../constants/APIConfig';

//GET
export const requestArticles = () => ({
    type: types.REQUEST_ARTICLES,
    loading: true
})
export const requestArticlesSuccess = (articles) => ({
    type: types.REQUEST_ARTICLES_SUCCESS,
    articles: articles,
    loading: false
})
export const requestArticlesError = (article) => ({
    type: types.REQUEST_ARTICLES_ERROR,
    loading: false,
})
/* thunk */
export const fetchArticles = () => {
    return async (dispatch) => {
		dispatch(requestArticles())
        
        let token = await APIConfig.API_TOKEN.then(data => data.token);

        return fetch(
			`${APIConfig.API_URI}/post/all`,
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
export const requestAddArticle = (article) => ({
    type: types.REQUEST_ADD_ARTICLE,
    payload: {...article }
})