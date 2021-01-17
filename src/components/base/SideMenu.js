import { useTranslation } from 'react-i18next';

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
                        <a href="/" className="button large fit">
                            {t('navbar').login}
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default SideMenu;