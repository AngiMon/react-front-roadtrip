import { connect } from 'react-redux'

import ArticlesListContainer from '../../components/pages/ArticlesList'
import NewArticle from '../../components/pages/NewArticle'
import { getArticles } from '../selectors/articles'

import { bindActionCreators } from 'redux'

import * as ArticlesAction from '../actions/requestArticles'

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ArticlesAction, dispatch),
})
const mapStateToProps = (state) => {
	return {data: getArticles(state)}
}
export const ArticlesList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticlesListContainer)

export const NewArticleContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewArticle)