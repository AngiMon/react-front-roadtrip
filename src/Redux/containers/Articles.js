import { connect } from 'react-redux'

import {ArticleComponent} from '../../components/Article'
import { getArticles } from '../selectors/articles'

import { bindActionCreators } from 'redux'

import * as ArticlesAction from '../actions/requestArticles'

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ArticlesAction, dispatch),
})
const mapStateToProps = (state) => {
	return {data: getArticles(state)}
}

export const ArticlesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleComponent)