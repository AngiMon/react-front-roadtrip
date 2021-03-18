import { connect } from 'react-redux'
import ArticlesListComponent from '../../components/pages/ArticlesList'
import { getArticles } from '../selectors/articles'
import { bindActionCreators } from 'redux'
import * as ArticlesAction from '../actions/requestArticles'

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ArticlesAction, dispatch),
})
const mapStateToProps = (state) => {
	return {data: getArticles(state)}
}
export const ArticlesListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticlesListComponent)

export default ArticlesListContainer