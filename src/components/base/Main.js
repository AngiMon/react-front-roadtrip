import { useTranslation } from 'react-i18next';
import {ArticlesContainer} from '../../Redux/containers/Articles'

function Main (props){
    const { t } = useTranslation();

    return(
        <div id="main">
            {/* <!-- Post --> */}
            <ArticlesContainer />
            {/* <!-- Pagination --> */}
            <ul className="actions pagination">
                <li><a href="/" className="disabled button large previous">{t("main").page.previous}</a></li>
                <li><a href="/" className="button large next">{t("main").page.next}</a></li>
            </ul>
        </div>
    )
}

export default Main;