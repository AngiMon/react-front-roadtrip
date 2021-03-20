import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Header(){
  const { t } = useTranslation();
    return (
      <header id="header">
        <h1>
          <Link to="/">
            { t("app").title } 
          </Link>
        </h1>
        <nav className="links">
          <ul>
            <li>
              {/* <a href="/">Lorem</a> */}
            </li>
          </ul>
        </nav>
        <nav className="main">
          <ul>
            {/* <li className="search">
              <a className="fa-search" href="#search">Search</a>
              <form id="search" method="get" action="#">
                <input type="text" name="query" placeholder="Search" />
              </form>
            </li> */}
            <li className="menu">
              <a className="fa-bars" href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;