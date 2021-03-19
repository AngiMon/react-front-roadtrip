import { connect } from 'react-redux'
import NewArticle from '../../components/pages/NewArticle'
import { bindActionCreators } from 'redux'
import * as ArticlesAction from '../actions/requestArticles'
import { getArticles } from '../selectors/articles'

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ArticlesAction, dispatch),
})
const mapStateToProps = (state) => {
	return {data: getArticles(state)}
}

const NewArticleContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewArticle)

export default NewArticleContainer;