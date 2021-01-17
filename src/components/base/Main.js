import { useTranslation } from 'react-i18next';
import {ArticleComponent} from '../Article'

function Main (props){
    const { t } = useTranslation();

    return(
        <div id="main">
            {/* <!-- Post --> */}
            <ArticleComponent />
            {/* <!-- Pagination --> */}
            <ul className="actions pagination">
                <li><a href="/" className="disabled button large previous">{t("main").page.previous}</a></li>
                <li><a href="/" className="button large next">{t("main").page.next}</a></li>
            </ul>

            
        </div>
    )
}

export default Main;