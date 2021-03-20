import { connect } from 'react-redux'
import NewArticle from '../../components/pages/NewArticle'
import {OneArticleComponent} from "../../components/Article"
import { bindActionCreators } from 'redux'
import * as ArticlesAction from '../actions/requestArticles'
import { getArticles } from '../selectors/articles'

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ArticlesAction, dispatch),
})
const mapStateToProps = (state) => {
	return {data: getArticles(state)}
}

export const NewArticleContainer = connect(
	() => { return { data:[] }},
	mapDispatchToProps,
)(NewArticle)

export const UpdateArticleContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewArticle)

export const OneArticleContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(OneArticleComponent)