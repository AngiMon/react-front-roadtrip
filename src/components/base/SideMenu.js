import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function SideMenu (){
    const { t } = useTranslation();

    return (
        <section id="menu">
            {/* <!-- Search --> */}
            {/* <section>
                <form className="search" method="get" action="#">
                    <input type="text" name="query" placeholder="Search" />
                </form>
            </section> */}

            {/* <!-- Actions --> */}
            <section>
                <ul className="actions stacked">
                    <li>
                        <Link to="/login" className="button large fit">
                            {t('navbar').login}
                        </Link>                            
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default SideMenu;